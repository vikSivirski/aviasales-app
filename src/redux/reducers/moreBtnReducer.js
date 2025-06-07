const initialState = 5;

const moreBtnReducer = (state = initialState, action) => {
  const newValue = state;

  switch (action.type) {
    case 'SHOW_MORE_TICKETS':
      return newValue + 5;
    default:
      return state;
  }
};

export default moreBtnReducer;
