import React from 'react'
import axios from 'axios'

import UsersList from './UsersList'
import UserForm from './UserForm'
// import { Link } from 'react-router-dom'
// <Link className="header__title" to="/dashboard">
// </Link>


export default class OrganizationalRelationshipApp extends React.Component {
  state = { 
    users: [],
    selectedId: undefined
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/users')
    .then(res => {
      console.log(res.data)
      this.setState({ users: res.data })
    }).catch(err => console.log(err))
  }

  addNewUser = (user) => {
    axios.post(
      'http://localhost:3000/api/v1/users',
      {
        user: {
          user_id: user.user_id,
          firstName: user.firstName,
          lastName: user.lastName,
          title:  user.title,
          manager_id: user.manager_id
        }
      }
    ).then(res => {      
      const users = this.state.users.concat([ user ])
      this.setState({ users })
    }).catch(err => console.log(err))
  }

  deleteUser = (id) => {
    axios.delete(`http://localhost:3000/api/v1/users/${id}`)
    .then(res => {
      
      const users = this.state.users.filter((user) => user.id !== id )

      console.log(users)

      this.setState({ users })
    })
    .catch(err => console.log(err))
  }

  selectUser = (selectedId, id) => {
    console.log(selectedId)

    axios.get(`http://localhost:3000/api/v1/users/?user_id=${selectedId}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))

    
    this.setState({ selectedId })
  }

  render() {
    return (
      <div>
        Users
        <UsersList users={this.state.users}
          selectedUserId={this.state.selectedId} 
          handleSelectUser={this.selectUser}
          handleDeleteUser={this.deleteUser}/>
        Add User
        <UserForm handleAddUser={this.addNewUser}/>
        { this.state.selectedId ? <p>This will selected</p> : <p>Please select note</p>}
        
      </div>
    )
  }
}