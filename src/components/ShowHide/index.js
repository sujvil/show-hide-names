// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onShowFirstName = () => {
    this.setState(perState => ({firstName: !perState.firstName}))
  }

  onShowLastName = () => {
    this.setState(perState => ({lastName: !perState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="first-name">
            <button
              className="button"
              onClick={this.onShowFirstName}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="last-name">
            <button
              className="button"
              onClick={this.onShowLastName}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
