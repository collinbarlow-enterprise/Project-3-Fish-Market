import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='formParent'>
        {/* <div className="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}> */}
        <div className="formContainer" >
          <form className='form' autoComplete="off" onSubmit={this.handleSubmit}>
            {/* <input className='' style={{ flex: '1', margin: '10px' }} placeholder='NAME' type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> */}
            <input className='formField' placeholder='NAME' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <input className='formField' placeholder='EMAIL' type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <input className='formField' placeholder='PASSWORD' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <input className='formField' placeholder='CONFIRM PASSWORD' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button className='formButton' type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="formError">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}