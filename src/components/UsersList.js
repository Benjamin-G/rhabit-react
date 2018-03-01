import React from 'react'

import User from './User'

const UsersList = (props) => (
  <div>
    <User users={props.users}/>
  </div>
)

export default UsersList