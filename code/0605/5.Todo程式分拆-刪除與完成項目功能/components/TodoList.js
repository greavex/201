import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  //console.log(props)
  const { todos, handleCompleted, handleDelete } = props

  console.log(todos)

  return (
    <>
      <div>
        <ul className="list-group">
          {todos.map((value, index) => {
            // 改用TodoItem
            return (
              <TodoItem
                key={value.id}
                value={value}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
