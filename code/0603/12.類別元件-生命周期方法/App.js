import React from 'react'

class App extends React.Component {
  constructor(props) {
    // 呼叫React.Component建構式
    super(props)

    //設定state初始值
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log(document.getElementById('abc').innerHTML)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log(document.getElementById('abc').innerHTML)
  }

  render() {
    console.log('render')
    return (
      <>
        <h1 id="abc">{this.state.total}</h1>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default App
