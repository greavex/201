import React, { useState } from 'react'
import MyDisplay from './components/MyDisplay'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <MyDisplay total={total} />
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App
