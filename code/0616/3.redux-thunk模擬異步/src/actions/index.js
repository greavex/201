import { ADD_VALUE, SUB_VALUE } from './actionTypes'

// action creator動作建立器
// 命名一般同action type，改為小駝峰寫法
// 一般也是一個action type寫一個
// 直接導出即可
// ex. payload = { value: 1}
export const addValue = (payload) => {
  console.log('原本-addValue(同步)')
  return { type: ADD_VALUE, payload }
}

export const addValueAsync = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('新的-addValue(異步)')
      dispatch(addValue(payload))
    }, 3000)
  }
}

export const subValue = (payload) => {
  return { type: SUB_VALUE, payload }
}
