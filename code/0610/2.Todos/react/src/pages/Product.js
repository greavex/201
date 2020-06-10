import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'
import MyBreadcrumb from '../components/MyBreadcrumb'

function Product(props) {
  //console.log(props)

  // 查詢字串可由props.location.search得到
  // 使用URLSearchParams來準備解析得到的查詢字串
  // URLSearchParams注意ie相容性問題
  const searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      <MyBanner title="產品" lead="product" />
      <MyBreadcrumb />
      {/* 用get方法即可解析出查詢字 */}
      <h2>目前的產品類型是(從網址得上得到)：{searchParams.get('cat')}</h2>
      <h2>目前的產品編號是(從網址得上得到)：{searchParams.get('pid')}</h2>
    </>
  )
}

// 高階元件的用法
export default withRouter(Product)
