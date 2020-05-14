import React, { Component } from 'react';
import FormInput from '../../../components/form-input/form-input.component';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      m_name: '',
      l_name: '',
      email: '',
      mobile: '',
      password: '',
    };
  }
  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     this.setState({
  //       f_name: '',
  //       m_name: '',
  //       l_name: '',
  //       email: '',
  //       mobile: '',
  //       password: '',
  //     });
  //   };
  //   handleChange = (event) => {
  //     const { value, name } = event.target;
  //     this.setState({ [name]: value });
  //   };

  render() {
    return (
      <div className='user'>
        <h1>User form</h1>
        <h1>User form</h1>
        <h1>User form</h1>
        <h1>User form</h1>
        <h1>User form</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='firstname'
            type='text'
            // value={this.state.f_name}
            // handleChange={this.handleChange}
            label='first-name'
          />
          <FormInput
            name='middlename'
            type='text'
            // value={this.state.l_name}
            // handleChange={this.handleChange}
            label='last-name'
          />
          <FormInput
            name='lastname '
            type='text'
            // value={this.state.l_name}
            // handleChange={this.handleChange}
            label='middle-name'
          />
          <FormInput
            name='email '
            type='email'
            // value={this.state.email}
            handleChange={this.handleChange}
            label='email'
          />
          <FormInput
            name='mobile'
            type='text'
            // value={this.state.mobile}
            handleChange={this.handleChange}
            label='Mobile No '
          />
          <FormInput
            name='password'
            type='password'
            // value={this.state.password}
            // handleChange={this.handleChange}
            label='password'
          />
        </form>
      </div>
    );
  }
}

export default User;
