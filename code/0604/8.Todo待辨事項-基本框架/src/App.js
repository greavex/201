import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

function App() {
  const [todos, setTodos] = useState(['買牛奶', '買iphone'])
  const [item, setItem] = useState('')

  return (
    <>
      <MyNavbar />
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">待辨事項</h1>
          <hr />
          <div>
            <input
              type="text"
              value={item}
              onChange={(event) => {
                setItem(event.target.value)
              }}
            />
          </div>
          <div>
            <ul>
              {todos.map((value, index) => {
                return <li>{value}</li>
              })}
            </ul>
          </div>
        </div>
      </main>
      <MyFooter />
    </>
  )
}

export default App
