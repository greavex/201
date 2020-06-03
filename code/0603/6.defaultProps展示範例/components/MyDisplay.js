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

// Specifies the default values for props:
MyDisplay.defaultProps = {
  text: '沒給值',
}

export default MyDisplay
