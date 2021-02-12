import { createStore } from "redux";

const initState = {
	a:0,
	volume:0,
	area:0,
	total:0,
}

const reducer = (state = initState, action) => {
	switch(action.type){
		case "CUBE_INCREASE" :
			return{
				...state,
				a: state.a + 1,
				volume: (state.a +1) * (state.a + 1) * (state.a + 1),
				area: 4 * ((state.a + 1) * (state.a +1)),
				total: 6 * ((state. a + 1) * (state.a + 1)),
			}
		default:
			return state
	}
}
const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'CUBE_INCREASE' });