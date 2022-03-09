import React, { FC, Fragment, PropsWithChildren, useState } from 'react'

interface StepProps {
	onNext?: (v: Any) => void
}

type Any = Record<string, any>

const StepOne: FC<StepProps> = ({ onNext = () => {} }) => {
	return (
		<>
			<h1>StepOne</h1>
			<button onClick={() => onNext({ name: 'maomao' })}>onNext</button>
		</>
	)
}
const StepTwo: FC<StepProps> = ({ onNext = () => {} }) => {
	return (
		<>
			<h1>StepTwo</h1>
			<button onClick={() => onNext({ age: 15 })}>onNext</button>
		</>
	)
}
const StepThree: FC<StepProps> = ({ onNext = () => {} }) => {
	return (
		<>
			<h1>StepThree</h1>
			<button onClick={() => onNext({ money: 150 })}>onNext</button>
		</>
	)
}
const StepFour: FC<StepProps> = ({ onNext = () => {} }) => {
	return (
		<>
			<h1>StepFour</h1>
			<button onClick={() => onNext({})}>onNext</button>
		</>
	)
}

const OnboardingFlows: FC = () => {
	const onFinish = (v: Any) => {
		console.log(`OnboardingFlows is Finished`, v)
	}
	return (
		<Fragment>
			<UnControlled onFinish={onFinish}>
				<StepOne />
				<StepTwo />
				<StepThree />
				<StepFour />
			</UnControlled>
		</Fragment>
	)
}

const UnControlled: FC<{
	onFinish: (v: Any) => void
}> = ({ children, onFinish }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [onboardingData, setOnboardingData] = useState<Any>({})

	const onNext = (data: Any) => {
		const nextIndex = currentIndex + 1
		if (nextIndex >= (children as React.ReactElement<PropsWithChildren<StepProps>>[]).length) {
			onFinish(onboardingData)
			return
		}
		setCurrentIndex(nextIndex)
		setOnboardingData({ ...onboardingData, ...data })
	}

	// https://blog.cristiana.tech/react-children-map-and-cloneelement-using-typescript
	// const currentNode = React.Children.toArray(children)[
	// 	currentIndex
	// ] as React.ReactElement<PropsWithChildren<StepProps>>
	// const content = React.isValidElement(currentNode)
	// 	? React.cloneElement(currentNode, {
	// 			onNext,
	// 	  })
	// 	: currentNode
	const currentNode = React.Children.toArray(children)[currentIndex]
	const content = React.isValidElement(currentNode)
		? React.cloneElement<StepProps>(currentNode, {
				onNext,
		  })
		: currentNode

	return <>{content}</>
}

export default OnboardingFlows
