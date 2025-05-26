const initialState = {
	all: false,
	noTransfers: false,
	oneTransfers: false,
	twoTransfers: false,
	threeTransfers: false
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE-FILTER":
			const updateState = {
				...state,
				[action.payload]: !state[action.payload]
			}
			const allChecked = Object.entries(updateState)
				.filter(([key]) => key !== 'all')
				.every(([, value]) => value === true );
			return {
				...updateState,
				all: allChecked
			}
		case "TOGGLE-ALL-FILTERS":
			return {
				all: action.payload,
				noTransfers: action.payload,
				oneTransfers: action.payload,
				twoTransfers: action.payload,
				threeTransfers: action.payload
			}
		default:
			return state;
	}
}

export default filterReducer;