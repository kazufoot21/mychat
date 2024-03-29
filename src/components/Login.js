import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import 'firebase/app';
import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>welcome to Mychat!</h2>
        <div
          className="login-button google"
          onClick={() => {
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
          }}
        >
          <GoogleOutlined />
          Googleでログイン
        </div>
        <br />
        <br />
        <div
          className="login-button facebook"
          onClick={() => {
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
          }}
        >
          <FacebookOutlined />
          Facebookでログイン
        </div>
      </div>
    </div>
  );
};

export default Login;
