import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as AviasalesLogo } from '../../assets/Logo.svg';
import TicketList from '../TicketList';
import TransferFilter from '../TransferFilter';
import Sorting from '../Sorting';
import Spiner from '../Spiner';
import ErrorMessage from '../ErrorMessage';
import WarningMessage from '../WarningMessage';
import fetchTickets from '../../redux/actions/tickets';
import getFilteredAndSortedTickets from '../../redux/selectors/ticketSelector';

import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => getFilteredAndSortedTickets(state));
  const loading = useSelector((state) => state.tickets.loading);
  const error = useSelector((state) => state.tickets.error);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const spiner = loading ? <Spiner /> : null;
  const showError = error !== null ? <ErrorMessage /> : null;
  const showWarning = tickets.length === 0 ? <WarningMessage /> : null;
  const ticketList = !loading && error === null && showWarning === null ? <TicketList ticketsData={tickets} /> : null;

  return (
    <div className={classes.App}>
      <div className={classes.logoWrapper}>
        <AviasalesLogo />
      </div>
      <div className={classes.container}>
        <TransferFilter />
        <div className={classes.ticketBlock}>
          <Sorting />
          {spiner}
          {showError}
          {showWarning}
          {ticketList}
        </div>
      </div>
    </div>
  );
}

export default App;
