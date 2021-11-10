import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import CategoriesAndPaymentMethods from './components/templates/CategoriesAndPaymentMethods';
import MoneyInfo from './components/templates/MoneyInfo';
import UserInfo from './components/templates/UserInfo';

function App() {

  return (
    <div className="App">
      <Header/>
      <br/><br/><br/><br/><br/><br/>
      <UserInfo/>
      <MoneyInfo/>
      <CategoriesAndPaymentMethods/>
    </div>
  );
}

export default App;
