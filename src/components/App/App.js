import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as AviasalesLogo } from "../../assets/Logo.svg";
import classes from './App.module.scss';
import TicketList from "../TicketList";
import TransferFilter from "../TransferFilter";
import Sorting from "../Sorting";
import fetchTickets from "../../redux/actions/tickets";
import getFilteredAndSortedTickets from "../../redux/selectors/ticketSelector";

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => getFilteredAndSortedTickets(state));

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  useEffect(() => {
    if(tickets.length > 0) {
      console.log(tickets)
    }
  }, [tickets]);

  return (
    <div className={classes.App}>
      <AviasalesLogo />
      <div className={classes.container}>
        <TransferFilter />
        <div className={classes.ticketBlock}>
          <Sorting />
          <TicketList ticketsData={tickets} />
        </div>
      </div>
    </div>
  );
}

export default App;
