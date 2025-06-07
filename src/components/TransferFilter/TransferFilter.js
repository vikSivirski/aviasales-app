import { useSelector, useDispatch } from 'react-redux';

import classes from './TransferFilter.module.scss';

const TransferFilter = () => {
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const transferCheckboxes = [
    { label: 'Все', key: 'all' },
    { label: 'Без пересадок', key: 'noTransfers' },
    { label: '1 персадка', key: 'oneTransfers' },
    { label: '2 пересадки', key: 'twoTransfers' },
    { label: '3 пересадки', key: 'threeTransfers' },
  ].map((item) => {
    return (
      <li key={item.key}>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            checked={filters[item.key]}
            onChange={() => {
              if (item.key === 'all') {
                dispatch({
                  type: 'TOGGLE-ALL-FILTERS',
                  payload: !filters.all,
                });
              } else {
                dispatch({
                  type: 'TOGGLE-FILTER',
                  payload: item.key,
                });
              }
            }}
          />
          <span className={classes.fakebox}></span>
          {item.label}
        </label>
      </li>
    );
  });

  return (
    <div className={classes.fieldset}>
      <legend>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <ul className={classes.checkboxList}>{transferCheckboxes}</ul>
    </div>
  );
};

export default TransferFilter;
