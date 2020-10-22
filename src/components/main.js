import React from 'react';
import {useSelector} from 'react-redux';
import TeamCard from './team-card';
import Header from './header'

export default () => {
  const teams = useSelector(state => state.teams)

  return (
    <div className='conteainer'>
      <Header />
      <ul className="teams-list">
        {teams.map((team, index) => {
          return <li className="teams-item" key={index +team.fullName + team.shortName}>
            <TeamCard 
              logo = {team.logo}
              fullName = {team.fullName}
              city = {team.city}
              shortName = {team.shortName}
              id = {team.teamId}
            />
          </li>
        })}
      </ul>
    </div>
  )
}
