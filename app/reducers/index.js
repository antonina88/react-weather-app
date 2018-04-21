import { combineReducers } from 'redux';
import {weatherConditions} from './weatherconditions';
import {locality} from './locality';
import filter from './filter';
import paramDiagram from './paramdiagram';

export default combineReducers({
  weatherConditions,
  locality,
  filter,
  paramDiagram
});
