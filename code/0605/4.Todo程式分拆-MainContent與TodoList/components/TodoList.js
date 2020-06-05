import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  console.log(props)
  const { todos, handleCompleted } = props

  return (
    <>
      <div>
        <ul className="list-group">
          {todos.map((value, index) => {
            // 依照completed刪除掉，或改變render的樣式
            if (value.completed) {
              return ''
            }

            // 改用TodoItem
            return (
              <TodoItem
                key={value.id}
                value={value}
                handleCompleted={handleCompleted}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
