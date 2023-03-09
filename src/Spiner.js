import React, { PureComponent } from 'react'
// import loading from "./loading.gif"

export default class Spiner extends PureComponent {
  render() {
    return (
        <div className="spinner-border, text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
}
