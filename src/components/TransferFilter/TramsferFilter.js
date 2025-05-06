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
      	<label>
       	 <input type="checkbox" value="all" />
        	{item}
      	</label>
    	</li>
		)
	})

	return (
		<fieldset>
			<legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
			<ul>
				{transferCheckboxes}
			</ul>
		</fieldset>
	)
}

export default TransferFilter;