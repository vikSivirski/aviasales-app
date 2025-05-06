import TicketListItem from "../TicketListItem"

const TicketList = ({ ticketsData }) => {
	const ticketItems = ticketsData.map((item) => {
		return (
			<TicketListItem 
				price={item.price}
				longTimeRange={item.longTimeRange}
				shortTimeRange={item.shortTimeRange}
				shortTravelTime={item.shortTravelTime}
				longTravelTime={item.longTravelTime}
				longTravelTransfer={item.shortTravelTransfer}
				shortTravelTransfer={item.shortTravelTransfer}
			/>
		)
	})
	return (
		<ul>{ticketItems}</ul>
	)
}

export default TicketList;