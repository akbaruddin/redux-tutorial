import { createStore } from "redux";

// cuboid
const initState = {
	l: 0,
	b: 0,
	h: 0,
	volume: 0,
	area: 0,
	total: 0
}

const reducer = (state = initState, action) => {
	switch(action.type) {
		case "HIGHT_INCREASE":
			return {
				...state,
				h: state.h + 1,
				volume: (state.h + 1) * state.l * state.b,
				area: 2 * (state.h + 1) * (state.l + state.b),
				total: 2 * ((state.l * (state.h + 1)) + (state.b * (state.h + 1)) + (state.l * state.b))
			}
		case "DEEP_INCREASE":
			return {
				...state,
				b: state.b + 1,
				volume: state.h * state.l * (state.b + 1),
				area: 2 * state.h * (state.l + (state.b + 1)),
				total: 2 * ((state.l * state.h) + ((state.b + 1) * state.h) + (state.l * (state.b + 1)))
			}
		case "LENGTH_INCREASE":
			return {
				...state,
				l: state.l + 1,
				volume: state.h * (state.l + 1) * state.b,
				area: 2 * state.h * ((state.l + 1) + state.b),
				total: 2 * (((state.l + 1) * state.h) + (state.b * state.h) + ((state.l + 1) * state.b))
			}
		default:
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'HIGHT_INCREASE' })
store.dispatch({ type: 'DEEP_INCREASE' })
store.dispatch({ type: 'LENGTH_INCREASE' })
store.dispatch({ type: 'LENGTH_INCREASE' })
store.dispatch({ type: 'LENGTH_INCREASE' })
store.dispatch({ type: 'HIGHT_INCREASE' })
