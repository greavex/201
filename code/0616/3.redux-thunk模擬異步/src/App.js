import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
//import { ADD_VALUE, SUB_VALUE } from './actions/actionTypes'
import { addValue, subValue, addValueAsync } from './actions/'

function App(props) {
  //const [total, setTotal] = useState(0)

  //觀察props裡的得到的store對應和方法
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          //props.dispatch({ type: ADD_VALUE, payload: { value: 1 } })

          // 使用actionCreators作全綁定，使用action creator函式來作送出動作
          props.addValue({ value: 1 })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          //props.dispatch({ type: ADD_VALUE, payload: { value: 1 } })

          // 使用actionCreators作全綁定，使用action creator函式來作送出動作
          props.addValueAsync({ value: 1 })
        }}
      >
        +1(異步)
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          //props.dispatch({ type: SUB_VALUE, payload: { value: 1 } })

          // 使用actionCreators作全綁定，使用action creator函式來作送出動作
          props.subValue({ value: 1 })
        }}
      >
        -1
      </button>
    </>
  )
}
// 將redux中的store的state(狀態)
// 對應到這個元件中的props中，名稱為total
const mapStateToProps = (store) => {
  return { total: store.counter }
}

// 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
//const mapDispatchToProps = null

// 高階元件的樣式，必要的
// 使用actionCreators作全綁定
export default connect(mapStateToProps, { addValue, subValue, addValueAsync })(
  App
)
