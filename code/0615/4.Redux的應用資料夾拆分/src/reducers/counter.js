export default function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD_VALUE':
      return state + action.value
    case 'SUB_VALUE':
      return state - action.value
    //預設值用於初始化store用的
    default:
      return state
  }
}
