import React from 'react'

// props會自動傳入
class AppClassTmp extends React.Component {
  constructor(props) {
    super(props)
    // 上面：呼叫React.Component建構式

    //設定state初始值
    this.state = {
      total: 0,
    }

    // 如果不用類似箭頭函式的語法，要在這裡先綁定才能用
    // this.handleClick = this.handleClick.bind(this)
  }

  // 元件已經呈現在網頁上(呼叫一次)
  componentDidMount() {}

  // 元件呼叫setState更新or接收到新的props已經重新更新後
  componentDidUpdate() {}

  // 元件即將消失之前
  componentWillUnmount() {}

  // 利用類似綁定this的箭頭函式的語法
  handleClick = (value) => {
    this.setState({ total: this.state.total + value })
  }

  render() {
    return <></>
  }
}

export default AppClassTmp
