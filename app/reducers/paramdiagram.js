import { SET_PARAM_DIAGRAM } from '../constants';

export default function paramDiagram(state = 'temperature', action) {
    switch (action.type) {
        case SET_PARAM_DIAGRAM: {
            return action.value;
        }
        default: {
            return state;
        }
    }
}
