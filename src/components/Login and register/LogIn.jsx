import React, { useState } from 'react';
import Header from "../Home page components/Header";

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    /*const handleLogin = () => {
      // You can add your login logic here.
      // For simplicity, let's just check if username and password are not empty.
      if (username && password) {
        setLoggedIn(true);
        // You may want to redirect the user to another page upon successful login.
      } else {
        alert('Please enter both username and password.');
      }
    };*/
  
    return (
      <div>
        <Header />
        <div className="wrap">
        <div class="login">
        <h2>Log in</h2>
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
            <input type="submit" value="เข้าสู่ระบบ" />
          </form>
        ) : (
          <div>
            <p>Welcome, {username}!</p>
            {/* You can add your logged-in content here */}
          </div>
        )}
        </div>
        </div>
      </div>
    );
  }
  
  export default LogIn;