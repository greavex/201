import React from 'react'

function TodoItem(props) {
  console.log(props)
  // 先解構賦值
  const { value, handleCompleted } = props

  const date = new Date(value.id)

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {value.text}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            handleCompleted(value.id)
          }}
        >
          完成
        </button>

        <span className="badge badge-primary badge-pill">
          ⌚{date.toLocaleString()}
        </span>
      </li>
    </>
  )
}

export default TodoItem
