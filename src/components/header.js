import React from 'react';
import {useSelector} from 'react-redux';
import SelectLeague from './button-meterial-ui';
import FilterByTeamCity from './autocomplete-search'
import logo from '../img/nba-logo.png'
import { Link } from 'react-router-dom';

export default () => {
  const leagues = useSelector(state => state.leagues)
  const activeLeague = useSelector(state => state.activeLeague)
  const teams = useSelector(state => state.teams)

  return (
    <div className="hedaer">
        <div className="header-navigation">
          <div className="header-navigation__logo">
            <Link to='/'>
              <img src={logo} alt="NBA" className="header-navigation__logo--img" width="120"/>
            </Link>
          </div>
          <SelectLeague leagues={leagues} activeLeague={activeLeague}/>
        </div>
      <FilterByTeamCity teams={teams} />
    </div>
  )
} 
