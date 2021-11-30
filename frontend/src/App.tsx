import './App.css';
import Header from './components/organisms/Header';
import Router from './Router';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div style={{marginTop: 80}}>
        <Router/>
      </div>
    </div>
  );
}

export default App;
