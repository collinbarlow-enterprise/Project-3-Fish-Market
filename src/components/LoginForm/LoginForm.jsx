import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import '../SignUpForm/SignUpForm.css'


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
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div className='formParent'>
            <div className="formContainer" >
                <form className='form' autoComplete="off" onSubmit={handleSubmit}>
                    <div className='formTip'>
                        <p>For Demo Purposes Use</p>
                        <p>Email: 'test@test.com' & Password: 'test'</p>
                    </div>
                    <input className='formField' placeholder='EMAIL' type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <input className='formField' type="password" placeholder='PASSWORD' name="password" value={credentials.password} onChange={handleChange} required />
                    <button className='formButton' type="submit" >LOG IN</button>
                </form>
            </div>
            <p className="formError">&nbsp;{error}</p>
        </div>
    );
}