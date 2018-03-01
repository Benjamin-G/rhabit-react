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


  render() {
    return (
      <form onSubmit={() => {}}>
        ADD USER FORM

      </form>
    )
  }
}