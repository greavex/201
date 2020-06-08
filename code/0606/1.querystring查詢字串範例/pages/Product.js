import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Product(props) {
  console.log(props)

  const searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      <MyBanner title="產品" lead="product" />
      <MyBreadcrumb />
      <h2>目前的產品類型是(從網址得上得到)：{searchParams.get('cat')}</h2>
      <h2>目前的產品編號是(從網址得上得到)：{searchParams.get('pid')}</h2>
    </>
  )
}

// 高階元件的用法
export default withRouter(Product)
