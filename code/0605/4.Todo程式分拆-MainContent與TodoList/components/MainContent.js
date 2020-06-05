import React from 'react'

function MainContent(props) {
  //console.log(props)

  return (
    <>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">{props.title}</h1>
          <hr />
          {props.children}
        </div>
      </main>
    </>
  )
}

export default MainContent
