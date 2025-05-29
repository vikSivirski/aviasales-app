import classes from "./TicketListItem.module.scss"

const TicketListItem = ({
	price,
	direction,
	returnDirection,
	toFlightTime, 
	backFlightTime, 
	travelTime, 
	backTravelTime,
	outboundTransfer,
	inboundTransfer,
	outbondStops, 
	inboundStops
}) => {
	return (
		<li className={classes.cardTicket}>
			<p className={classes.price}>{price}</p>
			<div className={classes.travelInfo}>
				<div>
					<p className={classes.infoLabel}>{direction}</p>
					<p className={classes.info}>{toFlightTime}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>В ПУТИ</p>
					<p className={classes.info}>{travelTime}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>{outboundTransfer}</p>
					<p className={classes.info}>{outbondStops}</p>
				</div>
			</div>
			<div className={classes.travelInfo}>
				<div>
					<p className={classes.infoLabel}>{returnDirection}</p>
					<p className={classes.info}>{backFlightTime}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>В ПУТИ</p>
					<p className={classes.info}>{backTravelTime}</p>
				</div>
				<div>
					<p className={classes.infoLabel}>{inboundTransfer}</p>
					<p className={classes.info}>{inboundStops}</p>
				</div>
			</div>
		</li>
	)
}

export default TicketListItem;