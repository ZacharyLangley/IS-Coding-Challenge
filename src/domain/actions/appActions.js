import { TOGGLE_LIGHTS } from "../types/appTypes";

export const toggleLights = () => async dispatch => {
    dispatch({
        type: TOGGLE_LIGHTS,
    })
} 