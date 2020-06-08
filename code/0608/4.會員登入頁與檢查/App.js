import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import About from './pages/About'
import TodoApp from './pages/TodoApp'
import Product from './pages/Product'

import NotFoundPage from './pages/NotFoundPage'
import MemberLogin from './pages/MemberLogin'

function App() {
  console.log()
  const [todos, setTodos] = useState([
    { id: 1591256594282, text: '買牛奶', completed: false, edited: false },
    { id: 1591256594281, text: '買iphone', completed: false, edited: true },
    { id: 1591256594283, text: '學react', completed: false, edited: false },
  ])

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginErrors, setLoginErrors] = useState([])

  const [auth, setAuth] = useState(false)

  const loginProcess = () => {
    const errors = []

    if (name === '') errors.push('姓名沒填')
    if (username === '') errors.push('帳號沒填')
    if (password === '') errors.push('密碼沒填')

    if (errors.length > 0) {
      setLoginErrors(errors)
      return
    }

    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])
    setAuth(true)
  }

  return (
    <Router>
      <>
        <MyNavbar auth={auth} name={name} />
        <MainContent>
          <Switch>
            <Route path="/product/:type?/:id?">
              <Product />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/memberlogin">
              <MemberLogin
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                loginProcess={loginProcess}
                loginErrors={loginErrors}
                auth={auth}
              />
            </Route>
            <Route path="/todoapp">
              <TodoApp todos={todos} setTodos={setTodos} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
