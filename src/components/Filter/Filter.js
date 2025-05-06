import { useState } from "react"

const Filter = () => {
  const [filterButtons, setfilterButtons] = useState([
    {
      filterName: "САМЫЙ ДЕШЕВЫЙ",
      selcted: true
    },
    {
      filterName: "САМЫЙ БЫСТРЫЙ",
      selcted: false
    },
    {
      filterName: "ОПТИМАЛЬНЫЙ",
      selcted: false
    }
  ]);
  const filterList = filterButtons.map((item) => {
    return (
      <li>
        <button>
          {item.filterName}
        </button>
      </li>
    );
  });

  return (
    <ul>
      {filterList}
    </ul>
  )
}

export default Filter;