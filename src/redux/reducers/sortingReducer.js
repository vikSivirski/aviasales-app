const initialState = 'САМЫЙ ДЕШЕВЫЙ';

const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORTING':
      return action.payload;
    default:
      return state;
  }
};

export default sortingReducer;
