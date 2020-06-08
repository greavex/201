import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Counter(props) {
  const [total, setTotal] = useState(0)

  return (
    <>
      <MyBanner title="計數器" lead="計數器頁面" />
      <MyBreadcrumb />
      <h1>{total}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

// 高階元件的用法
export default withRouter(Counter)
