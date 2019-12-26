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
          <div className="input-wrapper">
            <input className="input-effect" placeholder="Type your name" type="text" value={name} onChange={ (e) => {setName(e.target.value)} }/>
            <span class="focus-border"></span>
          </div>
          <Link to={`/chat/${name}/`} className="button">Connect</Link>
        </div>
    </div>
  );
}

export default Login;