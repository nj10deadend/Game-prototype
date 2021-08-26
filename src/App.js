import { Route, Switch } from 'react-router-dom';
import { useState} from 'react';
import NavBar from './Components/NavBar';
import Game from './Components/Game';
import Feedback from './Components/Feedback';
import Home from './Components/Home';
import Filler from './Components/Filler';
import ScriptData from './Components/ScriptData';


import './App.css';

function App() {
  const [page, setPage] = useState("/")
  const [script, setScript] = useState( [] );
  

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
          <Route path="/HWYS">
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