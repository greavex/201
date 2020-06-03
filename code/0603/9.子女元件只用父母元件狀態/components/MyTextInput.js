import React, { useState } from 'react'

// 所有狀態與更動狀態均來自於上層父母元件
function MyTextInput(props) {
  return (
    <>
      <input type="text" value={props.value} onChange={props.onChange} />
      {/* 相當於以下的語法 */}
      <input type="text" {...props} />
    </>
  )
}

export default MyTextInput
