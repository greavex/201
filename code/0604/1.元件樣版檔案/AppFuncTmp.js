import React, { useState, useEffect } from 'react'

function AppFuncTmp(props) {
  // 解構賦值
  const [total, setTotal] = useState(0)

  // 元件已經呈現在網頁上(呼叫一次) - componentDidMount
  useEffect(() => {
    // Your code here
  }, [])

  // 元件呼叫setState更新or接收到新的props已經重新更新後 componentDidUpdate
  useEffect(() => {
    // Your code here
  }, [total])

  // 元件即將消失之前 componentWillUnmount
  useEffect(() => {
    return () => {
      // Your code here
    }
  }, [total])

  // 內部函式的語法
  const handleClick = (value) => {
    setTotal(total + value)
  }

  return <></>
}

export default AppFuncTmp
