import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Main from './components/main'
import TeamPage from './components/team-page';
import {Operation} from './reducer';
import SingIn from './components/sign-in'

function App() {
  const dispatch = useDispatch();
  const activeLeague = useSelector(state => state.activeLeague)

  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Route path="/" exact render={ () => {
            dispatch(Operation.loadTeamsByLeague(activeLeague));
            return <Main />
          }}/>
          <Route path="/login" exact component={SingIn}/>
          <Route path="/team/:id" render={({match})=> {
            const {id} = match.params;
            return <TeamPage  id={id}/>;
          }}/>
        </Switch>
      </div>
      </div>
  );
}

export default App;



