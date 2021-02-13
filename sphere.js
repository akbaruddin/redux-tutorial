import { createStore } from "redux";

const initState = {
	r: 0,
	volume: 0,
	area: 0,
	total: 0,
}

const reducer = (state = initState, action) => {
	switch(action.type){
		case "SPHERE":
			return{
				...state,
				r: state.r + 1,
				volume: 4/3 * Math.PI * (state.r + 1) * (state.r + 1) * (state.r + 1),
				area: 4 * Math.PI * (state.r + 1) * (state.r + 1),
				total: 4 * Math.PI * (state.r + 1) * (state.r + 1),
			}
		default:
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() =>{
	console.log(store.getState());
});

store.dispatch({ type: "SPHERE"});