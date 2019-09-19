import * as types from '../action/Actions'



var initialState = [];

var myReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.PREMIER_LEAGUE:
			console.log(action.teams)
			state = action.teams;
			return state;

		default: return state;
	}
}

export default myReducer; 