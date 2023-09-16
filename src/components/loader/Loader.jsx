import React from "react"
import style from './Loader.module.css'

const Loader = () => {
	return (
		<div className={style.loader}>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
			<span className={style.loader-block}></span>
		</div>
	)
}

export default Loader
