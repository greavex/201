import React, { useState } from 'react'

function MyButton(props) {
  return (
    <>
      <button onClick={props.clickMethod}>{props.title}</button>
    </>
  )
}

export default MyButton
