import { createStore } from "redux";

const initState = {
	count: 0,
}

const reducer = (state = initState, action) => {
	switch(action.type) {
		case "ADD":
			return {
				count: state.count + 1
			}
		case "MINUS":
			return {
				count: state.count - 1
			}
		case "SQUARE":
			return {
				count: state.count * state.count 
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
