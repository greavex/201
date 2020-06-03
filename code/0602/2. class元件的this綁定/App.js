import React from 'react'

class App extends React.Component {
  constructor(props) {
    // 呼叫React.Component建構式
    super(props)

    //設定state初始值
    this.state = {
      total: 0,
    }

    // 如果不用類似箭頭函式的語法，要在這裡先綁定才能用
    // this.handleClick = this.handleClick.bind(this)
  }

  // 利用類似綁定this的箭頭函式的語法
  handleClick = (value) => {
    this.setState({ total: this.state.total + value })
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            this.handleClick(1)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.handleClick(-1)
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default App
