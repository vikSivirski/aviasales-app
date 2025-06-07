const initialState = {
  searchId: '',
  loading: false,
  error: null,
  data: [],
};

const ticketsReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ID':
      return { ...state, searchId: action.payload };
    case 'FETCH_TICKETS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_TICKETS_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_TICKETS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ticketsReduser;
