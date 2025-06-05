import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import classes from "./TicketList.module.scss";
import TicketListItem from "../TicketListItem";

const TicketList = ({ ticketsData }) => {
	const visibleCount = useSelector((state) => state.moreTickets);
	const dispatch = useDispatch();

	const showMoreTickets = () => {
		dispatch({type: "SHOW_MORE_TICKETS"});
	}

	const ticketItems = ticketsData.slice(0, visibleCount).map((item) => {
		const outbound = item.segments[0];
		const inbound = item.segments[1];
		const itemId = crypto.randomUUID();

		const flightTimeRange = (direction) => {
			const date = new Date(direction.date);
			const departureTime = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

			const arivalDate = new Date(date.getTime() + direction.duration * 60000);
			const arivalTime = arivalDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

			return `${departureTime} - ${arivalTime}`;
		}

		const formatFlightTime = (direction) => {
			const hours = Math.floor(direction.duration / 60);
			const minutes = direction.duration % 60;

			return `${hours}ч ${minutes}м`;
		}

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
				key={itemId}
				price={item.price}
				carrier={item.carrier}
				direction={`${outbound.origin} - ${outbound.destination}`}
				returnDirection={`${inbound.origin} - ${inbound.destination}`}
				toFlightTime={flightTimeRange(outbound)}
				backFlightTime={flightTimeRange(inbound)}
				travelTime={formatFlightTime(outbound)}
				backTravelTime={formatFlightTime(inbound)}
				outboundTransfer={transferCounter(outbound)}
				outbondStops={stopsFormat(outbound)}
				inboundTransfer={transferCounter(inbound)}
				inboundStops={stopsFormat(inbound)}
			/>
		)
	})

	return (
		<React.Fragment>
			<ul>{ticketItems}</ul>
			<button className={classes.btn} onClick={showMoreTickets}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
		</React.Fragment>
	)
}

export default TicketList;