import React, { useState, useEffect } from 'react'

import TodoAddForm from '../components/todo/TodoAddForm'
//import TodoItem from './components/TodoItem'
//import MainContent from './components/MainContent'
import TodoList from '../components/todo/TodoList'
import MyBreadcrumb from '../components/MyBreadcrumb'

import requestToServer from '../utils/requestToServer'

function TodoApp(props) {
  // todos列表
  // todo = { id: 123213, text:'買牛奶', completed: false, edited: false }
  const [todos, setTodos] = useState([])

  const [dataLoading, setDataLoading] = useState(false)

  // 用於文字輸入框輸入新的todo
  const [text, setText] = useState('')

  const getTodosFromServer = () => {
    // 開啟載入指示
    setDataLoading(true)

    const url = 'http://localhost:5555/todos/'
    const method = 'GET'
    const bodyData = ''
    const verify = (data) => data.length > 0
    const successCallback = (data) => setTodos(data)
    const failCallback = (data) => {}

    requestToServer(
      url,
      method,
      bodyData,
      verify,
      successCallback,
      failCallback,
      true
    )
  }

  const addNewTodoItemToSever = (item, successCallback) => {
    // 開啟載入指示
    setDataLoading(true)

    const url = 'http://localhost:5555/todos/'
    const method = 'POST'
    const bodyData = JSON.stringify(item)
    const verify = (data) => !!data.id
   
    const failCallback = (data) => {}

    requestToServer(
      url,
      method,
      bodyData,
      verify,
      successCallback,
      failCallback,
      true
    )
  }

  const updateTodoItemToSever = (item, successCallback = () => {}) => {
    // 開啟載入指示
    // setDataLoading(true)

    const url = 'http://localhost:5555/todos/' + item.id
    const method = 'PUT'
    const bodyData = JSON.stringify(item)
    const verify = (data) => !!data.id
    
    const failCallback = (data) => {}

    requestToServer(
      url,
      method,
      bodyData,
      verify,
      successCallback,
      failCallback,
      true
    )
  }

  const deleteTodoItemToSever = (id, successCallback) => {
    // 開啟載入指示
    //setDataLoading(true)

    const url = 'http://localhost:5555/todos/' + id
    const method = 'DELETE'
    const bodyData = ''
    const verify = (data) => true
    //const successCallback = (data) => {}
    const failCallback = (data) => {}

    requestToServer(
      url,
      method,
      bodyData,
      verify,
      successCallback,
      failCallback,
      true
    )
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getTodosFromServer()
  }, [])

  // 每次total資料有變動就會3秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [todos])

  // 利用id值尋找符合的todos裡的index，然後改變completed
  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const todoItemIndex = todos.findIndex((v, i) => v.id === id)

    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      updateTodoItemToSever(newTodos[todoItemIndex], () => {
        setTodos(newTodos)
      })
      //setTodos(newTodos)
    }
  }

  // 利用id值尋找符合的todos裡的index，然後改變edited值
  const handleEditedToggle = (id) => {
    const newTodos = [...todos]

    const todoItemIndex = todos.findIndex((v, i) => v.id === id)

    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited

      updateTodoItemToSever(newTodos[todoItemIndex], () => {
        setTodos(newTodos)
      })
      //setTodos(newTodos)
    }
  }

  // 利用id值尋找符合的todos裡的index，然後改變text值
  const handleEditedSave = (id, text) => {
    const newTodos = [...todos]

    const todoItemIndex = todos.findIndex((v, i) => v.id === id)

    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].text = text
      updateTodoItemToSever(newTodos[todoItemIndex])
      setTodos(newTodos)
    }

    handleEditedToggle(id)
  }

  // 把成員直接從陣列中刪除
  const handleDelete = (id) => {
    const newTodos = todos.filter((v, i) => v.id !== id)
    deleteTodoItemToSever(id, () => setTodos(newTodos))
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <TodoAddForm
        text={text}
        todos={todos}
        setText={setText}
        setTodos={setTodos}
        addNewTodoItemToSever={addNewTodoItemToSever}
      />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedToggle={handleEditedToggle}
        handleEditedSave={handleEditedSave}
      />
    </>
  )

  // 初始化的第一次render的判斷，擋掉會看到空白頁，初始化值的情況
  // if (todos.length === 0) return <></>

  return (
    <>
      <MyBreadcrumb />
      {dataLoading ? loading : display}
    </>
  )
}

export default TodoApp
