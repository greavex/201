import React, { useState } from 'react'
import MyDisplay from './components/MyDisplay'
import MyButton from './components/MyButton'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <MyDisplay total={total} />
      <MyButton
        title="+1"
        clickMethod={() => {
          setTotal(total + 1)
        }}
      />
      <MyButton
        title="-1"
        clickMethod={() => {
          setTotal(total - 1)
        }}
      />
    </>
  )
}

export default App
