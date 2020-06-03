import React from 'react'

class MyTimerClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </>
    )
  }
}

export default MyTimerClass
