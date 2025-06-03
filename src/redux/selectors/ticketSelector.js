const getFilteredAndSortedTickets = (state) => {
  const tickets = state.tickets.data;
  const filters = state.filter;
  const sorting = state.sorting;

  const stopsMap = {
    noTransfers: 0,
    oneTransfers: 1,
    twoTransfers: 2,
    threeTransfers: 3
  };

  const allowedStops = Object.entries(filters)
    .filter(([key, value]) => key !== "all" && value)
    .map(([key]) => stopsMap[key]);

  const filteredTickets = tickets.filter((ticket) => {
    return ticket.segments.every((segment) => allowedStops.includes(segment.stops.length));
  });

  const sortingTickets = (data, sortingType) => {
    const dataCopy = [...data];

    if (sortingType === "САМЫЙ ДЕШЕВЫЙ") {
      return dataCopy.sort((a, b) => a.price - b.price)
    } else if (sortingType === "САМЫЙ БЫСТРЫЙ") {
      return dataCopy.sort((a, b) => {
        const aTotal = a.segments[0].duration + a.segments[1].duration;
        const bTotal = b.segments[0].duration + b.segments[1].duration;

        return aTotal - bTotal;
      });
    } else if (sortingType === "ОПТИМАЛЬНЫЙ") {
      return dataCopy.sort((a, b) => {
        const aTotal = a.segments[0].duration + a.segments[1].duration;
        const bTotal = b.segments[0].duration + b.segments[1].duration;

        const aOptimal = a.price + aTotal;
        const bOptimal = b.price + bTotal;

        return aOptimal - bOptimal;
      });
    }
  }

  const sortedTickets = sortingTickets(filteredTickets, sorting);

  return sortedTickets
}

export default getFilteredAndSortedTickets;