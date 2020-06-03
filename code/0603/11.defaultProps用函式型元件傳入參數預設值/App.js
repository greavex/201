import React, { useState } from 'react'
import MyTextInput from './components/MyTextInput'
import MyTextDisplay from './components/MyTextDisplay'

function App() {
  const [nameFromChild, setNameFromChild] = useState('')

  return (
    <>
      <MyTextDisplay text={nameFromChild} />
      <MyTextInput
        value={nameFromChild}
        onChange={(event) => setNameFromChild(event.target.value)}
      />
    </>
  )
}

export default App
