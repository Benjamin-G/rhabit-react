import React from 'react'

const User = (props) => (
  <div>
    {props.users.map((user) => (
      <div className="user" key={user.user_id}>
        <p >{user.firstName} {user.lastName} {user.title}</p>
      </div>
      )
    )}
  </div>
)

export default User