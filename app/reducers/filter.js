import { SET_FILTER } from '../constants';

export default function filter(state = 'London', action) {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
}
