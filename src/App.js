import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Game from './Components/Game';
import Feedback from './Components/Feedback';
import Home from './Components/Home';
import Filler from './Components/Filler';
import ScriptData from './Components/ScriptData';

import StartButton from './Components/StartButton';

import './App.css';

function App() {


  const [page, setPage] = useState("/")

  const [script, setScript] = useState( [] );
  

  // const [script, setScript] = useState( [] )

  // const getFetchScript = () => {
  //   fetch('http://localhost:8008/script')
  //     .then(response => response.json())
  //     .then(fetchedScript => {
  //       console.log(fetchedScript)
  //       setScript(fetchedScript)
  //     });
  // }

  // useEffect(getFetchScript, [])
  // Bikini Bottom Times for Filler Tab
    
  return (

    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
          <Route path="/game">
              <Game fetchedScript={script} script={ScriptData}/>
          </Route>
          <Route path="/BBInfo"> 
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