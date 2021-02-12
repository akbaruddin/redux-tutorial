import { createStore } from "redux";

const initState = {	
	l: 1,
	b:1,
	h:1,
	VOLUME:1,
}

const reducer = (state = initState, action) => {
	switch(action.type) {
		case "ADD":
			return {
				count: state.l + 1
			}
		case "MINUS":
			return {
				count: state.l - 1
			}
		case "SQUARE":
			return {
				count: state.l * state.l 
			}
		case "VOLUME":
			return{
				count: state.l * state.b * state.h
			}
		default:
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: "ADD" })
store.dispatch({ type: "ADD" })
store.dispatch({ type: "MINUS" })
store.dispatch({ type: "MINUS" })
store.dispatch({ type: "ADD" })
store.dispatch({ type: "ADD" })
store.dispatch({ type: "SQUARE" })
store.dispatch({ type: "VOLUME" })
