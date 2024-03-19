import React, { useState } from 'react';
import Header from "../Home page components/Header";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    return (
      <div>
        <Header />
        <div className="wrap">
        <div class="login">
        <h2>Register</h2>
        {!loggedIn ? (
          <form>
            <div>
              <label>Username: </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm Password: </label>
              <input
                type="password"
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="สมัครสมาชิก" />
          </form>
          ) : (
            <div>
            <p>You already login!</p>
            {/* You can add your logged-in content here */}
          </div>
        )}
        </div>
        </div>
      </div>
    );
  }
  
  export default Register;