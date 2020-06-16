import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addValue, minusValue, addValueAsync, initValueAsync } from '../actions'

function Counter(props) {
  //觀察props裡的得到的store對應和方法
  //console.log('actionCreators', actionCreators)
  //console.log('props', props)

  // 解構賦值的寫法
  const { total, addValue, minusValue, addValueAsync, initValueAsync } = props

  // componentDidMount時執行一次
  // 從伺服要資料
  useEffect(() => {
    initValueAsync()
  }, [])

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          addValue({ value: 1 })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          addValueAsync({ value: 1 })
        }}
      >
        +1(異步)
      </button>
      <button
        onClick={() => {
          // 改用dispatch發送動作，改變redux裡的store中記錄的state值
          minusValue({ value: 1 })
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

// 綁定store的dispatch方法到這個元件的props
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ addValue, minusValue }, dispatch)
// }

// 高階元件的樣式，必要的
export default connect(mapStateToProps, {
  addValue,
  addValueAsync,
  minusValue,
  initValueAsync,
})(Counter)
