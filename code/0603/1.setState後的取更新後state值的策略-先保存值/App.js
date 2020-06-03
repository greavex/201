import React from 'react'

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = (event) => {
    // 先保存會更動後的值
    const v = event.target.value

    // 設置給狀態
    this.setState({ value: v })

    // 後面使用這個先保存的值
    console.log(v)
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="男一" key={1}>
            男一
          </option>
          <option value="女2" key={2}>
            女2
          </option>
          <option value="React" key={3}>
            React
          </option>
        </select>
        <h1>{this.state.value}</h1>
      </div>
    )
  }
}
