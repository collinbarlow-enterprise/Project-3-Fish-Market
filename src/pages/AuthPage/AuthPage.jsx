import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage" style={{}}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{marginTop: '15px'}}>Oceanic Lux</h2>
        {/* <Logo /> */}
           
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <h3 style={{borderSize: '10px', borderStyle: 'solid'}} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Do you want to register?' : 'Do you want to log in?'}</h3> 
      </div>
    </main>
  );
}