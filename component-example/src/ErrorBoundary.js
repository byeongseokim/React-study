import React, { Component } from "react"

class ErrorBoundary extends Component {
  state = {
    error: false,
  }
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    })
    console.log({ error, info })
  }
  render() {
    if (this.state.error)
      return <div>현재 서버에 문제가 있습니다. 잠시만 기다려 주세요.</div>
    return this.props.children
  }
}

export default ErrorBoundary
