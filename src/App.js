// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Game from './Components/Game';
import Feedback from './Components/Feedback';
import Home from './Components/Home';
import Filler from './Components/Filler';

import StartButton from './Components/StartButton';

import './App.css';

function App() {


  const [page, setPage] = useState("/")

  

  const [script, setScript] = useState()

  const getFetchScript = () => {
    fetch('')
      .then(response => response.json())
      .then(fetchedScript => 
        setScript(fetchedScript)
        );
  }
    
  return (

    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
          <Route path="/game">
              <Game scriptData={script}  />
          </Route>
          <Route path="/filler">
              <Filler />
          </Route>
          <Route path="/feedback">
              <Feedback />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="*">
              <h1>404 not found</h1>
          </Route>
      </Switch>
    </div>

  );
}




export default App;


