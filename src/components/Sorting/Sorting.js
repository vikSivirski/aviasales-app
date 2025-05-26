import { useSelector, useDispatch } from 'react-redux';

import classes from "./Sorting.module.scss"



const Sorting = () => {
  const sortingButtons = ["САМЫЙ ДЕШЕВЫЙ", "САМЫЙ БЫСТРЫЙ", "ОПТИМАЛЬНЫЙ"];
  const currentSorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();
  const handleClick = (sortingName) => {
    dispatch({type: 'SET_SORTING', payload: sortingName});
  }

  const sortingList = sortingButtons.map((sortingName) => {
    return (
      <li key={crypto.randomUUID}className={classes.sortingListItem}>
        <button className={
            sortingName === currentSorting
            ? `${classes.sortingButton} ${classes.activeSortingButton}`
            : classes.sortingButton
          }
          onClick={() => handleClick(sortingName)}
        >
          {sortingName}
        </button>
      </li>
    );
  });

  return (
    <ul className={classes.sortingList}>
      {sortingList}
    </ul>
  )
}

export default Sorting;