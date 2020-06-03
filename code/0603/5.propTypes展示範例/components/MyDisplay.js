import React, { useState } from 'react'
import PropTypes from 'prop-types'

function MyDisplay(props) {
  console.log(props)

  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

MyDisplay.propTypes = {
  text: PropTypes.string.isRequired,
}

export default MyDisplay
