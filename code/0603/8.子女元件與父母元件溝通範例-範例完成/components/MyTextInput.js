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
          // 讓子女元件上層父母元件傳來的方法
          props.sendNameToMe(name)
        }}
      >
        送到父母元件
      </button>
    </>
  )
}

export default MyTextInput
