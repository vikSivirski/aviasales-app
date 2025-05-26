import { useState } from "react";

import { ReactComponent as AviasalesLogo } from "../../assets/Logo.svg";
import classes from './App.module.scss';
import TicketList from "../TicketList";
import TransferFilter from "../TransferFilter";
import Sorting from "../Sorting";

function App() {
  const [ticketsData, setTicketsData] = useState([
    {
      price: 13400,
      longTimeRange: "10:45 - 08:00",
      shortTimeRange: "11:20 - 00:50",
      shortTravelTime: "21ч 15м",
      longTravelTime: "13ч 30м",
      longTravelTransfer: "HKG, JNB",
      shortTravelTransfer: "HKG"
    },
    {
      price: 13400,
      longTimeRange: "10:45 - 08:00",
      shortTimeRange: "11:20 - 00:50",
      shortTravelTime: "21ч 15м",
      longTravelTime: "13ч 30м",
      longTravelTransfer: "HKG, JNB",
      shortTravelTransfer: "HKG"
    },
    {
      price: 13400,
      longTimeRange: "10:45 - 08:00",
      shortTimeRange: "11:20 - 00:50",
      shortTravelTime: "21ч 15м",
      longTravelTime: "13ч 30м",
      longTravelTransfer: "HKG, JNB",
      shortTravelTransfer: "HKG"
    },
  ])

  return (
    <div className={classes.App}>
      <AviasalesLogo />
      <div className={classes.container}>
        <TransferFilter />
        <div className={classes.ticketBlock}>
          <Sorting />
          <TicketList ticketsData={ticketsData} />
        </div>
      </div>
    </div>
  );
}

export default App;
