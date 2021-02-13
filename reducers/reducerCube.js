import { CUBE_INCREASE } from "../action-types/actionTypeCube.js";
import { cubeIncrease } from "../actions/actionCube.js";

const initState = {
	a:0,
	volume:0,
	area:0,
	total:0,
}

export const reducerCube = (state = initState, action) => {
	switch(action.type){
		case CUBE_INCREASE :
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



