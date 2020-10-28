import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <div className="page">
      <Header />
      <Register />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
