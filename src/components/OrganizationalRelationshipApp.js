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
    this.updateStateFromApi()
  }

  updateStateFromApi() {
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
          firstName: user.firstName,
          lastName: user.lastName,
          title:  user.title,
          manager_id: user.manager_id
        }
      }
    ).then(res => {      
      this.updateStateFromApi()
    }).catch(err => console.log(err))
  }

  deleteUser = (id) => {
    axios.delete(`http://localhost:3000/api/v1/users/${id}`)
    .then(res => {
      this.updateStateFromApi()
      this.setState({ selectedId: undefined })
    })
    .catch(err => console.log(err))
  }

  selectUser = (selectedId, id) => {
    this.setState({ selectedId })
    console.log()
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
        <UserForm key='add_user' handleAddUser={this.addNewUser} users={this.state.users}/> 

        Edit User
        <UserForm key='edit_user' user={this.state.users.find(user => user.id === this.state.selectedId)} users={this.state.users}/>  
      </div>

    )
  }
}