import firebase from 'firebase';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'API_KEY',
    authDomain: 'AUTH_DOMAIN',
    projectId: 'PROJECT_ID',
    storageBucket: 'STORAGE_BUCKET',
    messagingSenderId: 'MESSAGING_SENDER_ID',
    appId: 'APP_ID',
  })
  .auth();
