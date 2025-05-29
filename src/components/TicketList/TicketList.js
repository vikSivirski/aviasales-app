import TicketListItem from "../TicketListItem"

const TicketList = ({ ticketsData }) => {
	const ticketItems = ticketsData.map((item) => {
		const outbound = item.segments[0];
		const inbound = item.segments[1];

		const date = new Date(outbound.date);
		const departureTime = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

		const arivalDate = new Date(date.getTime() + outbound.duration * 60000);
		const arivalTime = arivalDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

		const backDate = new Date(inbound.date);
		const backDepartureTime = backDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

		const backArivalDate = new Date(backDate.getTime() + inbound.duration * 60000);
		const backArivalTime = backArivalDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

		const hours = Math.floor(outbound.duration / 60);
		const minutes = outbound.duration % 60;

		const backHours = Math.floor(inbound.duration / 60);
		const backMinutes = inbound.duration % 60;

		const transferCounter = (direction) => {
			if(direction.stops.length === 0) {
				return 'БЕЗ ПЕРЕСАДОК';
			} else if(direction.stops.length === 1) {
				return '1 ПЕРСАДКА';
			} else if(direction.stops.length >= 2) {
				return `${direction.stops.length} ПЕРЕСАДКИ`;
			}
		}

		const stopsFormat = (direction) => {
			return direction.stops.join(', ')
		}

		return (
			<TicketListItem
				price={item.price}
				direction={`${outbound.origin} - ${outbound.destination}`}
				returnDirection={`${inbound.origin} - ${inbound.destination}`}
				toFlightTime={`${departureTime} - ${arivalTime}`}
				backFlightTime={`${backDepartureTime} - ${backArivalTime}`}
				travelTime={`${hours}ч ${minutes}м`}
				backTravelTime={`${backHours}ч ${backMinutes}м`}
				outboundTransfer={transferCounter(outbound)}
				outbondStops={stopsFormat(outbound)}
				inboundTransfer={transferCounter(inbound)}
				inboundStops={stopsFormat(inbound)}
			/>
		)
	})
	return (
		<ul>{ticketItems}</ul>
	)
}

export default TicketList;