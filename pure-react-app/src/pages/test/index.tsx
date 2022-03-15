import React, { FC } from 'react'
import styles from './test.scss'
import css from './test.css'

const Test: FC = () => {
	return (
		<div className={styles.red}>
			<div>my react Test app!!</div>
			<div className={css.box}>aff</div>
		</div>
	)
}

export default Test
