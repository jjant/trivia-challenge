import { actions } from '../actions/questions';

// Using a zip list to store questions.
const initialState = {
	answered: [],
	current: null,
	remaining: []
};

class Reducer {
	static reduce(state = initialState, action) {
		if (Reducer[action.type]) {
			return Reducer[action.type](state, action);
		}

		return state;
	}
}

export const reducer = Reducer.reduce;
