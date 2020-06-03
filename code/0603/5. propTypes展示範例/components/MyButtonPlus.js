import React, { useState } from 'react'

function MyButtonPlus(props) {
  console.log(props)

  return (
    <>
      <button onClick={props.onClick}>{props.children}</button>
    </>
  )
}

export default MyButtonPlus
