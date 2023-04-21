import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
        // The promise returned by the signUp service method 
        // will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        const user = await usersService.login(credentials);
        setUser(user);
        } catch {
        setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
        <div className="form-container col-12" style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <form autoComplete="off" onSubmit={handleSubmit} style={{width: '100%'}}>
            {/* <label>Email</label> */}
            <input className='col-12'placeholder='EMAIL' type="text" name="email" value={credentials.email} onChange={handleChange} required style={{flex : '1', margin: '10px'}}/>
            {/* <label>Password</label> */}
            <input className='col-12'type="password" placeholder='PASSWORD' name="password" value={credentials.password} onChange={handleChange} required style={{flex : '1', margin: '10px'}}/>
            <button type="submit" style={{alignSelf: 'center', margin: '10px'}}>LOG IN</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}