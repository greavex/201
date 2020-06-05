import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {/* 把Nav.Link當作NavLink來使用 */}
          {/* 記得首頁`/`要加exact作精確比對，不然都會一直點亮 */}
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            關於我們
          </Nav.Link>
          <Nav.Link as={NavLink} to="/todoapp">
            待辨事項
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default MyNavbar
