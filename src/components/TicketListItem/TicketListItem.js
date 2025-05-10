import classes from "./TicketListItem.module.scss"

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
		<li className={classes.cardTicket}>
			<p className={classes.price}>{price}</p>
			<div className={classes.travelInfo}>
				<div>
					<p className={classes.infoLabel}>MOW – HKT</p>
					<p className={classes.info}>{longTimeRange}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>В ПУТИ</p>
					<p className={classes.info}>{longTravelTime}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>2 ПЕРЕСАДКИ</p>
					<p className={classes.info}>{longTravelTransfer}</p>
				</div>
			</div>
			<div className={classes.travelInfo}>
				<div>
					<p className={classes.infoLabel}>MOW – HKT</p>
					<p className={classes.info}>{shortTimeRange}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>В ПУТИ</p>
					<p className={classes.info}>{shortTravelTime}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>2 ПЕРЕСАДКИ</p>
					<p className={classes.info}>{shortTravelTransfer}</p>
				</div>
			</div>
		</li>
	)
}

export default TicketListItem;