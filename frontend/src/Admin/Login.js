import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminlogo from '../img/arjun.png';
import schoollogo from './css/rlogo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://arjun-academy-4c7g.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/admin/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Server error. Try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="left-section">
        <div className="branding">
          <img src={schoollogo} alt="User Icon" width="500" height="300" style={{ marginBottom: '20px' }} />
          <div className="logo">
            <img src={adminlogo} alt="Admin Logo" width="200" height="80" />
          </div>
          <p>Welcome to the admin panel</p>
        </div>
      </div>

      <div className="right-section">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login your account</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {loading && (
            <div className="gif-loader">
              <img
                src="https://spectrumam.com/wp-content/uploads/2017/12/lg.dual-gear-loading-icon.gif"
                alt="Loading..."
                width="40"
                height="40"
              />
            </div>
          )}
        </form>
      </div>

      <style>{`
        .login-wrapper {
          display: flex;
          height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }
        .left-section {
          flex: 1;
          background: linear-gradient(135deg, rgb(35, 204, 136), rgb(142, 207, 53));
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          animation: fadeInLeft 1s ease-in-out;
        }
        .branding {
          text-align: center;
        }
        .logo {
          margin-bottom: 10px;
        }
        .logo img {
          filter: brightness(0) invert(1);
        }
        .right-section {
          flex: 1;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
          animation: fadeInRight 1s ease-in-out;
        }
        .login-form {
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          position: relative;
        }
        .login-form h2 {
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }
        input {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: border 0.3s;
        }
        input:focus {
          border-color: #2b8ef9;
          outline: none;
        }
        button {
          background:rgb(45, 202, 14);
          color: white;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:disabled {
          background: #a0c9f9;
          cursor: wait;
        }
        button:hover:enabled {
          background: #1f76d3;
        }
        .gif-loader {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        @keyframes fadeInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (max-width: 768px) {
          .login-wrapper {
            flex-direction: column;
          }
          .left-section {
            clip-path: none;
            height: 180px;
          }
          .right-section {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
