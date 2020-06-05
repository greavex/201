import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

import TodoAddForm from './components/TodoAddForm'
//import TodoItem from './components/TodoItem'
import MainContent from './components/MainContent'
import TodoList from './components/TodoList'

function App() {
  // todos列表
  // todo = { id: 123213, text:'買牛奶', completed: false }
  const [todos, setTodos] = useState([
    { id: 1591256594282, text: '買牛奶', completed: false },
    { id: 1591256594281, text: '買iphone', completed: false },
    { id: 1591256594283, text: '學react', completed: false },
  ])

  // 用於文字輸入框輸入新的todo
  const [text, setText] = useState('')

  // 利用id值尋找符合的todos裡的index，然後改變completed
  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const todoItemIndex = todos.findIndex((v, i) => v.id === id)

    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      setTodos(newTodos)
    }
  }

  return (
    <>
      <MyNavbar />
      <MainContent title="1231待辨事項">
        <TodoAddForm
          text={text}
          todos={todos}
          setText={setText}
          setTodos={setTodos}
        />
        <TodoList todos={todos} handleCompleted={handleCompleted} />
      </MainContent>
      <MyFooter />
    </>
  )
}

export default App
