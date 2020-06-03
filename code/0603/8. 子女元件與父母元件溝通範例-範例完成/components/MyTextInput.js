import React, { useState } from 'react'

function MyTextInput(props) {
  const [name, setName] = useState('')

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button
        onClick={() => {
          props.sendNameToMe(name)
        }}
      >
        送到父母元件
      </button>
    </>
  )
}

export default MyTextInput
