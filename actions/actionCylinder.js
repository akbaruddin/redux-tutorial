import { CYLINDER_RADIUS_INCREASE, CYLINDER_HEIGHT_INCREASE } from "../action-types/actionTypeCylinder.js";

export const cylinderRadius = () => {
    return { type: CYLINDER_RADIUS_INCREASE }
}

export const cylinderHeight = () => {
	return { type: CYLINDER_HEIGHT_INCREASE }
}