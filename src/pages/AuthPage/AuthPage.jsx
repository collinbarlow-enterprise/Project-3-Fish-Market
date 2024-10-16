import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="authPage">
      <div className='authContainer'>
        <h3 className='authHeader'>Welcome to Oceanic Lux</h3>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        <h3 className='authSwitch' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Do you want to register?' : 'Do you want to log in?'}</h3>
      </div>
    </main>
  );
}