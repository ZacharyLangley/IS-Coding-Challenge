import { TOGGLE_LIGHTS } from '../types/appTypes';

const initialState = {
    lightsOn: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_LIGHTS:
            return {
                ...state,
                lightsOn: !state.lightsOn
            }
        default:
            return state;
    }
}