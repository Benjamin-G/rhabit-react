import React from 'react'
import axios from 'axios'

import UsersList from './UsersList'
import AddUser from './AddUser'
// import { Link } from 'react-router-dom'
// <Link className="header__title" to="/dashboard">
// </Link>


export default class OrganizationalRelationshipApp extends React.Component {
  state = { users: [] }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/users')
    .then(res => {
      this.setState({ users: res.data })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        Users
        <UsersList users={this.state.users}/>
        Add User
        <AddUser />
      </div>
    )
  }
}