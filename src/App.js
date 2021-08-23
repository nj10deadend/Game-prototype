import logo from './logo.svg';
import Header from './Components/Header';
import Game from './Components/Game';
import StartButton from './Components/StartButton';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (<>

    <Header />

    <BrowserRouter>

      <Route exact path="/"  />
      <Route exact path="/GameStart" component={Game} />

    </BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <StartButton />
      </header>
    </div>
  </>
  );
}




export default App;


