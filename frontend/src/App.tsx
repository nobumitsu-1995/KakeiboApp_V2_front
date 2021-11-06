import { AccountBoxOutlined } from '@mui/icons-material';
import React from 'react';
import './App.css';
import Card from './components/molecules/Card';
import ItemMenu from './components/molecules/ItemMenu';
import Header from './components/organisms/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <br/><br/><br/><br/><br/><br/>
      <Card
        color="#1877D2"
        title={"ユーザー情報"}
        action={<ItemMenu/>}
      >
        <AccountBoxOutlined/>
        <>

        </>
      </Card>
    </div>
  );
}

export default App;
