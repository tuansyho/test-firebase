import React from 'react';
import './App.css';
import firebase from './firebase.js';
import ListEmail from './Component/ListEmail.jsx';
import FormEmail from './Component/FormEmail.jsx';

firebase.firestore().collection('time').add({
  email: 'tuansyho96@gmail.com',
  password: 'tuan123'
})

function App() {
  return (
    <div className="App">
      <h1>test thôi</h1>
      <ListEmail />
      <FormEmail />
    </div>
  );
}

export default App;
