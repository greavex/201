import { combineReducers } from 'redux'

import counter from './counter'
import todos from './todos'

export const rootReducer = combineReducers({
  counter,
  //todos,
})
