const TicketListItem = ({
	price, 
	longTimeRange, 
	shortTimeRange, 
	shortTravelTime, 
	longTravelTime, 
	longTravelTransfer, 
	shortTravelTransfer
}) => {
	return (
		<li>
			<p>{price}</p>
			<div className="long-travel-info">
				<div>
					<p className="info-label">MOW – HKT</p>
					<p className="info">{longTimeRange}</p>
				</div>
				<div>
					<p className="info-label">В ПУТИ</p>
					<p className="info">{longTravelTime}</p>
				</div>
				<div>
					<p className="info-label">2 ПЕРЕСАДКИ</p>
					<p className="info">{longTravelTransfer}</p>
				</div>
			</div>
			<div className="short-travel-info">
				<div>
					<p className="info-label">MOW – HKT</p>
					<p className="info">{shortTimeRange}</p>
				</div>
				<div>
					<p className="info-label">В ПУТИ</p>
					<p className="info">{shortTravelTime}</p>
				</div>
				<div>
					<p className="info-label">2 ПЕРЕСАДКИ</p>
					<p className="info">{shortTravelTransfer}</p>
				</div>
			</div>
		</li>
	)
}

export default TicketListItem;