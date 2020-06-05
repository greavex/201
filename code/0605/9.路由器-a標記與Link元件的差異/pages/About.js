import React from 'react'
import { Link } from 'react-router-dom'

import MyBanner from '../components/MyBanner'

function About() {
  return (
    <>
      <MyBanner title="關於我們" lead="首頁是一個網站的第一個看到的頁面" />
      <div>
        <a href="/">Home - a tag</a>
        <br />
        <Link to="/">Home - Router Link</Link>
      </div>
      <hr />
      <div>
        <a href="/todoapp">Todo - a tag</a>
        <br />
        <Link to="/todoapp">Todo - Router Link</Link>
      </div>
    </>
  )
}

export default About
