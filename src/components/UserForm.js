import React from 'react'

export default class UserForm extends React.Component {
  state = {
    user_id: this.props.user ? this.props.user.user_id : '',
    firstName: this.props.user ? this.props.user.firstName : '',
    lastName: this.props.user ? this.props.user.lastName : '',
    title: this.props.user ? this.props.user.title : '',
    manager_id: this.props.user ? this.props.user.manager_id : '',
    error: ''
  }

  onUserIdChange = (e) => {
    const user_id = e.target.value
    if(!user_id || user_id.match(/^[+]?\d+$/)){
      this.setState(() => ({ user_id }))
    }
  }

  onFirstNameChange = (e) => {
    const firstName = e.target.value
    this.setState(() => ({ firstName }))
  }

  onLastNameChange = (e) => {
    const lastName = e.target.value
    this.setState(() => ({ lastName }))
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }

  onManagerIdChange = (e) => {
    const manager_id = e.target.value
    if(!manager_id || manager_id.match(/^[+]?\d+$/)){
      this.setState(() => ({ manager_id }))
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    //Handles Add User
    if(!this.state.user_id || !this.state.firstName || !this.state.lastName || !this.state.title || !this.state.manager_id && !this.props.handleUpDateUser) {
      this.setState(() => ({ error: "Please fill out all fields"}))
    } else {
      this.setState(() => ({ error: "" }))
    
      this.props.handleAddUser(
        {
          user_id: parseInt(this.state.user_id, 10),
          firstName: this.state.firstName ,
          lastName: this.state.lastName ,
          title: this.state.title ,
          manager_id: this.state.manager_id
        }
      )
    }
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {!!this.state.error ? <p className="form__error">{this.state.error}</p> : undefined}

        <input placeholder="User ID"
          type="string" 
          value={this.state.user_id}
          onChange={this.onUserIdChange}/>

        <input placeholder="First Name"
          type="string" 
          value={this.state.firstName}
          onChange={this.onFirstNameChange}/>

        <input placeholder="Last Name"
          type="string" 
          value={this.state.lastName}
          onChange={this.onLastNameChange}/>

        <input placeholder="Title"
          type="string" 
          value={this.state.title}
          onChange={this.onTitleChange}/>

        <input placeholder="Manager ID"
          type="string" 
          value={this.state.manager_id}
          onChange={this.onManagerIdChange}/>

          <div>
            <button>{this.props.user ? 'Save Update' : 'Add User'}</button>
          </div>
      </form>
    )
  }
}