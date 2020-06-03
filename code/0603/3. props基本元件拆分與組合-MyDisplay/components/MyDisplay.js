import React, { useState } from 'react'

function MyDisplay(props) {
  console.log(props)

  return (
    <>
      <h1>{props.total}</h1>
    </>
  )
}

export default MyDisplay
