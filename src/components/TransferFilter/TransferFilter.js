import classes from './TransferFilter.module.scss'

const TransferFilter = () => {
	const transferCheckboxes = [
		"Все",
		"Без пересадок",
		"1 персадка",
		"2 пересадки",
		"3 пересадки",
	].map((item) => {
		return (
			<li>
				<label className={classes.checkbox}>
					<input type="checkbox" />
					<span className={classes.fakebox}></span>
					{item}
				</label>
			</li>
		)
	})

	return (
		<div className={classes.fieldset}>
			<legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
			<ul>
				{transferCheckboxes}
			</ul>
		</div>
	)
}

export default TransferFilter;