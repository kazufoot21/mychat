import firebase from 'firebase';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAJLfMRvd4wIoxM_rWol5WOZcHQezvPeDk',
    authDomain: 'mychat-e3e5a.firebaseapp.com',
    projectId: 'mychat-e3e5a',
    storageBucket: 'mychat-e3e5a.appspot.com',
    messagingSenderId: '780936270143',
    appId: '1:780936270143:web:076aa6071e16f3565c838a',
  })
  .auth();
