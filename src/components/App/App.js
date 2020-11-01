import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import SavedNews from '../SavedNews/SavedNews';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
// import Login from '../Login/Login';

function App() {
  return (
    <div className="page">
      <Header />
      <Register />
      {/* <Login /> */}
      <Main />
      {/* <SavedNews /> */}
      <Footer />
    </div>
  );
}

export default App;
