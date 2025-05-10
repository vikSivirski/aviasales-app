import { useState } from "react";

import classes from "./Filter.module.scss"

const Filter = () => {
  const [filterButtons, setFilterButtons] = useState([
    {
      filterName: "САМЫЙ ДЕШЕВЫЙ",
      selected: true
    },
    {
      filterName: "САМЫЙ БЫСТРЫЙ",
      selected: false
    },
    {
      filterName: "ОПТИМАЛЬНЫЙ",
      selected: false
    }
  ]);
  const filterList = filterButtons.map((item) => {
    return (
      <li className={classes.filterListItem}>
        <button className={item.selected === true? `${classes.filterButton} ${classes.activeFilterButton}` : classes.filterButton}>
          {item.filterName}
        </button>
      </li>
    );
  });

  return (
    <ul className={classes.filterList}>
      {filterList}
    </ul>
  )
}

export default Filter;