const fetchTickets = () => {
	return async (dispatch) => {	
		dispatch({ type: "FETCH_TICKETS_REQUEST" });
		
		try {			
			const res = await fetch('https://aviasales-test-api.kata.academy/search');
			const data = await res.json();
			const searchId = data.searchId;
			
			const resTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
			const ticketsData = await resTickets.json();

			dispatch({ type: "GET_ID", payload: searchId });
			dispatch({ type: "FETCH_TICKETS_SUCCESS", payload: ticketsData.tickets });
		} catch (error) {
			dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
		}
	}
}

export default fetchTickets;