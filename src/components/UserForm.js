import React from 'react'

export default class UserForm extends React.Component {
  state = {
    firstName: this.props.user ? this.props.user.firstName : '',
    lastName: this.props.user ? this.props.user.lastName : '',
    title: this.props.user ? this.props.user.title : '',
    manager_id: this.props.user ? this.props.user.manager_id : '',
    error: ''
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

  onManagerChange = (e) => {
    const manager_id = e.target.value
    this.setState(() => ({ manager_id }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    //Handles Add User
    if(!this.state.firstName || !this.state.lastName || !this.state.title && !this.props.handleUpDateUser) {
      this.setState({ error: "Please fill out all fields"})
    } else {
      this.setState({ 
        firstName: '',
        lastName: '',
        title: '',
        manager_id: '',
        error: '' })
    
      this.props.handleAddUser(
        {
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
        {this.props.user ? <p>Please Edit : {this.props.user.firstName} {this.props.user.lastName}</p> : undefined}

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
        <select onChange={this.onManagerChange}>
          {
            this.props.users.map( user => <option key={user.id} value={user.id}>{`${user.firstName} ${user.lastName}`}</option> )
          }
        </select>
        <div>
          <button>{this.props.user ? 'Save Update' : 'Add User'}</button>
        </div>
      </form>
    )
  }
}