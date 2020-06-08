import React from 'react'

import MyBanner from '../components/MyBanner'
import { withRouter } from 'react-router-dom'

function MemberLogin(props) {
  const {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    loginProcess,
    loginErrors,
    auth,
  } = props

  // 錯誤訊息陣列的呈現
  const displayErrors = loginErrors.length ? (
    <div className="alert alert-danger" role="alert">
      <ul className="list-unstyled">
        {loginErrors.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  ) : (
    ''
  )

  // login成功時的callback
  const loginSuccessCallback = () => {
    alert('儲存成功，跳回首頁')
    props.history.push('/')
  }

  return (
    <>
      <MyBanner title="會員登入頁" lead="會員登入頁頁面" />
      {displayErrors}
      <div className="form-inline">
        <input
          className="form-control mb2"
          type="text"
          value={name}
          placeholder="請輸入姓名"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <input
          className="form-control mb2"
          type="text"
          value={username}
          placeholder="請輸入帳號"
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
        <input
          className="form-control mb2"
          type="text"
          value={password}
          placeholder="請輸入密碼"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
        <button
          className="btn btn-primary mb2"
          onClick={() => {
            loginProcess(loginSuccessCallback)
          }}
        >
          登入
        </button>
      </div>
    </>
  )
}

export default withRouter(MemberLogin)
