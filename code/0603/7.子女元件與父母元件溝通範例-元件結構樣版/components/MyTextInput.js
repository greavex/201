import React, { useState } from 'react'

function MyTextInput() {
  const [name, setName] = useState('')

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={() => {}}>送到父母元件</button>
    </>
  )
}

export default MyTextInput
