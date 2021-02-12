import { createStore } from "redux";

const initState ={
	r: 0,
	h: 0,
	volume: 0,
	area: 0,
	total: 0,
}

const reducer =(state = initState, action) =>{
	switch(action.type){
		case "RADIUS_INCREASE":
			return {
				...state,
				r: state.r + 1,
				volume: Math.PI * (state.r + 1) * (state.r + 1) * state.h,
				area: 2 * Math.PI * (state.r + 1) * state.h,
				total: 2 * Math.PI * (state.r + 1) *(state.h + state.r + 1), 
			}
		case "HEIGHT_INCREASE":
			return{
				...state,
				h: state.h + 1,
				volume: Math.PI * state.r * state.r * (state.h +1),
				area: 2 * Math.PI * state.r * (state.h + 1),
				total: 2 * Math.PI * state.r * ((state.h + 1 + state.r)),
			}			
		default :
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() =>{
	console.log(store.getState());
});

store.dispatch({ type: "RADIUS_INCREASE" });
store.dispatch({ type: "HEIGHT_INCREASE" });