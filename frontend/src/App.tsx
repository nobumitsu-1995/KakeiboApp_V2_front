import React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import CategoriesAndPaymentMethods from './components/templates/CategoriesAndPaymentMethods';
import IndexItems from './components/templates/IndexItems';
import MoneyInfo from './components/templates/MoneyInfo';
import UserInfo from './components/templates/UserInfo';

function App() {
  const items = [
    {
      id: "1234",
      date: "12/12",
      category: {big_category: "fixed_cost", name: "qwerty"},
      payment_method: {name: "12345"},
      name: "hoge",
      price: 12345,
      note: "qwertyuiop@["
    },
    {
      id: "1234",
      date: "12/12",
      category: {big_category: "fixed_cost", name: "qwerty"},
      payment_method: {name: "12345"},
      name: "hoge",
      price: 12345,
      note: "qwertyuiop@["
    },
    {
      id: "1234",
      date: "12/12",
      category: {big_category: "fixed_cost", name: "qwerty"},
      payment_method: {name: "12345"},
      name: "hoge",
      price: 12345,
      note: "qwertyuiop@["
    },
  ]

  return (
    <div className="App">
      <Header/>
      <br/><br/><br/><br/><br/><br/>
      <UserInfo/>
      <MoneyInfo/>
      <CategoriesAndPaymentMethods/>
      <IndexItems items={items}/>
    </div>
  );
}

export default App;
