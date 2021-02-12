import { createStore } from "redux";

const initState = {
	r: 0,
	l: 0,
	h: 0,
	volume: 0,
	area: 0, 
	total: 0,
}

const reducer = (state = initState, action) => {
	switch(action.type){
		case "RADIUS_INCREASE":
			return{
				...state,
				r: state.r + 1,
				volume: 1/3 * Math.PI * (state.r + 1) * (state.r + 1) * state.h,
				area: Math.PI * (state.r + 1) * state.l,
				total: Math.PI * (state.r + 1) *(state.l + (state.r + 1)),
			}
		case "LENGTH_INCREASE":
			return{
				...state,
				l: state.l + 1,
				volume: 1/3 * Math.PI * state.r * state.r * state.h,
				area: Math.PI * state.r * (state.l + 1),
				total: Math.PI * state.r * ((state.l + 1) + state.r),
			}
		case "HEIGHT_INCREASE":
			return{
				...state,
				h: state.h + 1,
				volume: 1/3 * Math.PI * state.r * state.r * (state.h + 1),
				area: Math.PI * state.r * state.l,
				total: Math.PI * state.r * (state.l + state.r),
			}
		default:
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: "RADIUS_INCREASE" });
store.dispatch({ type: "LENGTH_INCREASE" });
store.dispatch({ type: "HEIGHT_INCREASE" });