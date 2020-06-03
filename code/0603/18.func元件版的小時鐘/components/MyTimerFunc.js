import React, { useState, useEffect } from 'react'

function MyTimerFunc(props) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      window.clearInterval(timerID)
    }
  }, [date])

  return <>{date.toLocaleTimeString()}</>
}

export default MyTimerFunc
