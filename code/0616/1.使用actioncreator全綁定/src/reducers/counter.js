import { ADD_VALUE, SUB_VALUE } from '../actions/actionTypes'

export default function counter(state = 0, action) {
  switch (action.type) {
    case ADD_VALUE:
      return state + action.payload.value
    case SUB_VALUE:
      return state - action.payload.value
    //預設值用於初始化store用的
    default:
      return state
  }
}
