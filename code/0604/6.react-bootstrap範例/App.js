import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap'

function App(props) {
  // 解構賦值
  const [total, setTotal] = useState(0)

  // 元件已經呈現在網頁上(呼叫一次) - componentDidMount
  useEffect(() => {
    // Your code here
  }, [])

  // 元件呼叫setState更新or接收到新的props已經重新更新後 componentDidUpdate
  useEffect(() => {
    // Your code here
  }, [total])

  // 元件即將消失之前 componentWillUnmount
  useEffect(() => {
    return () => {
      // Your code here
    }
  }, [total])

  // 內部函式的語法
  const handleClick = (value) => {
    setTotal(total + value)
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
