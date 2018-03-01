import React from 'react'
import axios from 'axios'

import UsersList from './UsersList'
import UserForm from './UserForm'
// import { Link } from 'react-router-dom'
// <Link className="header__title" to="/dashboard">
// </Link>


export default class OrganizationalRelationshipApp extends React.Component {
  state = { users: [] }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/users')
    .then(res => {
      console.log(res)
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
      console.log(user)
      
      this.setState({ users: this.state.users.concat([ user ]) })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        Users
        <UsersList users={this.state.users}/>
        Add User
        <UserForm handleAddUser={this.addNewUser}/>
      </div>
    )
  }
}