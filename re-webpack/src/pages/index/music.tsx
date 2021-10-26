import { ChangeEvent, FC, useCallback } from 'react'
import { Audio } from '@/components'
import { useImmer } from '@/hooks'
import { debounce } from '@/utils'

interface Istate {
	palyed: number
	total: number
	isPaly: boolean
	interval: null | number
}

const Music: FC = () => {
	const [time, setTime] = useImmer({
		palyed: 0,
		total: 100,
		isPaly: false,
		interval: null,
	})

	const play = useCallback(
		debounce((v: number) => {}, 500),
		[]
	)

	const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.persist()
		const v = e.target.valueAsNumber
		play(v)
		setTime((draft) => {
			draft.palyed = v
		})
	}

	return (
		<div>
			<h1>come some of the music</h1>
			<p>阿里巴巴</p>
			<Audio />

			{/* <input type="range" style={{ width:500 }} onChange={handleRangeChange} min={0} value={time.palyed} max={time.total} /> */}
		</div>
	)
}

export default Music
