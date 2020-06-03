import React, { useState } from 'react'
import MyDisplay from './components/MyDisplay'
import MyButton from './components/MyButton'
import MyButtonPlus from './components/MyButtonPlus'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <MyDisplay text={123} />

      <MyButton
        title="+1"
        onClick={() => {
          setTotal(total + 1)
        }}
      />
      <MyButtonPlus
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </MyButtonPlus>
      <MyButton
        title="-1"
        onClick={() => {
          setTotal(total - 1)
        }}
      />
    </>
  )
}

export default App
