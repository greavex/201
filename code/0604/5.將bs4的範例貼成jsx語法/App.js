import React, { useState, useEffect } from 'react'

function App(props) {
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

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default App
