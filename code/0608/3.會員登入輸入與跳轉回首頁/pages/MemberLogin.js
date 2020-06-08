import React from 'react'

import MyBanner from '../components/MyBanner'
import { withRouter } from 'react-router-dom'

function MemberLogin(props) {
  const { name, setName } = props

  return (
    <>
      <MyBanner title="會員登入頁" lead="會員登入頁頁面" />
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <button
        onClick={() => {
          alert('儲存成功，跳回首頁')
          props.history.push('/')
        }}
      >
        儲存
      </button>
    </>
  )
}

export default withRouter(MemberLogin)
