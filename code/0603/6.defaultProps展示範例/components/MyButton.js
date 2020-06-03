import React, { useState } from 'react'

function MyButton(props) {
  console.log(props)

  return (
    <>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  )
}

export default MyButton
