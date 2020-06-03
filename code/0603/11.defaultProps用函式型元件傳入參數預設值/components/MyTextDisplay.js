import React, { useState } from 'react'

// 所有狀態與更動狀態均來自於上層父母元件
function MyTextDisplay({ text = '無名人士' }) {
  return (
    <>
      <h1>你好，{text}</h1>
    </>
  )
}

export default MyTextDisplay
