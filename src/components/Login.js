import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>welcome to Mychat!</h2>
        <div className="login-button google">
          <GoogleOutlined />
          Googleでログイン
        </div>
        <br />
        <br />
        <div className="login-button facebook">
          <FacebookOutlined />
          Facebookでログイン
        </div>
      </div>
    </div>
  );
};

export default Login;
