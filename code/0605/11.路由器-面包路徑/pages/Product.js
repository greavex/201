import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Product(props) {
  console.log(props)
  return (
    <>
      <MyBanner title="產品" lead="product" />
      <MyBreadcrumb />
      <h2>目前的產品編號是(從網址得上得到)：{props.match.params.id}</h2>
    </>
  )
}

// 高階元件的用法
export default withRouter(Product)
