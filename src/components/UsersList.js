import React from 'react'

const UsersList = (props) => (
  <div>
    {props.users.map((user) => {
      const isSelectedUser = user.user_id === props.selectedUserId
      const className = isSelectedUser ? 'user user--selected' : 'user'

      return(
        <div className={className} key={user.id} onClick={() => props.handleSelectUser(user.user_id, user.id)}>
          <p>User ID: {user.user_id}</p>
          <p>{user.firstName} {user.lastName} {user.title}</p> 
          <p>Manager ID: {user.manager_id}</p>
          {isSelectedUser ? <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button> : undefined}
        </div>
      )
      })
    }
  </div>
)

export default UsersList