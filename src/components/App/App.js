import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as AviasalesLogo } from "../../assets/Logo.svg";
import classes from './App.module.scss';
import TicketList from "../TicketList";
import TransferFilter from "../TransferFilter";
import Sorting from "../Sorting";
import Spiner from "../Spiner";
import ErrorMessage from "../ErrorMessage";
import fetchTickets from "../../redux/actions/tickets";
import getFilteredAndSortedTickets from "../../redux/selectors/ticketSelector";

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => getFilteredAndSortedTickets(state));
  const loading = useSelector((state) => state.tickets.loading);
  const error = useSelector((state) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  useEffect(() => {
    if(tickets.length > 0) {
      console.log(tickets)
    }
  }, [tickets]);

  const spiner = loading ? <Spiner /> : null;
  const showError = error !== null ? <ErrorMessage /> : null;
  const ticketList = !loading && error === null ? <TicketList ticketsData={tickets} /> : null;

  return (
    <div className={classes.App}>
      <AviasalesLogo />
      <div className={classes.container}>
        <TransferFilter />
        <div className={classes.ticketBlock}>
          <Sorting />
          {spiner}
          {showError}
          {ticketList}
        </div>
      </div>
    </div>
  );
}

export default App;
