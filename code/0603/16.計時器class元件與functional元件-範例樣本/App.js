import React, { useState, useEffect } from 'react'
import MyTimerClass from './components/MyTimerClass'
import MyTimerFunc from './components/MyTimerFunc'

function App(props) {
  return (
    <>
      <MyTimerClass />
      <MyTimerFunc />
    </>
  )
}

export default App
