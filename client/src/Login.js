import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  const [name, setName] = useState('');

  return (
    <div className="Login">
        Welcome!
        What is your name?
        <div className="login-menu">
          <input className="login-input" type="text" value={name} onChange={ (e) => {setName(e.target.value)} }/>
          <Link to={`/chat/${name}/`} className="login-connect">Connect</Link>
        </div>
    </div>
  );
}

export default Login;