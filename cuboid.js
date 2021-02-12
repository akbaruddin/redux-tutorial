import { createStore } from "redux";

const initState = {
	l: 0,
	b: 0,
	h: 0,
	volume: 0,
	area: 0,
	total: 0,
}

const reducer = (state =initState, action) =>{
	switch(action.type){
		case "LENGTH_INCREASE":
			return {
				...state,
				l: state.l + 1,
				volume: (state.l + 1)* state.b * state.h,
				area: 2 * state.h *((state.l + 1) + state.b),
				total: 2 * ((state.l + 1) * state.b + state.b * state.h + state.h * (state.l + 1)),
			}
		case "BASE_INCREASE":
			return{
				...state,
				b: state.b + 1,
				volume: state.l * (state.b + 1) * state.h,
				area: 2 * state.h *(state.l + (state.b + 1)),
				total: 2 * (state.l * (state.b + 1) + (state.b1+ 1) * state.h + state.h * state.l),
			}
		case "HEIGHT_INCRESE":
			return{
				...state,
				h: state.h + 1,
				volume: state.l * state.b * (state.h + 1),
				area: 2 * (state.h + 1)
			}
		default:
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: "LENGTH_INCREASE"});
store.dispatch({ type: "BASE_INCREASE" });