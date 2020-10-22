import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Operation} from '../reducer';
import TeamCard from './team-card';
import TableMaterial from './table-material';
import DefaultButton from './material-default-button'
import { Link, useHistory } from 'react-router-dom';
import logo from '../img/nba-logo.png'
import user from '../mock-user'

const SHOW_GAMES = 2;
const SHPW_PLAYRES = 10;

export default function TeamPage({id}) {
  const [gamesCount, setGamesCount] = useState(SHOW_GAMES)
  const [playersCount, setPlayersCount] = useState(SHPW_PLAYRES)
  const allPlayers = useSelector(state => state.players)
  const allGames = useSelector(state => state.games)
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!(token === user.token)) {
      history.push("/login");
    }
  }, [history]);

  const players = allPlayers.slice(0, playersCount)
  const games = allGames.slice(0, gamesCount)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(Operation.loadPlayers(id))
    dispatch(Operation.loadGames(id))
  }, [dispatch, id]);

  const ShowMorePlayers = () => {
    setPlayersCount(prevPlayersCount => prevPlayersCount + SHPW_PLAYRES)
  } 

  const ShowMoreGame = () => {
    setGamesCount(prevGamesCount => prevGamesCount + SHOW_GAMES)
  } 

  const ShowAllPlayers = () => {
    setPlayersCount(allPlayers.length)
  } 

  const ShowAllGame = () => {
    setGamesCount(allGames.length)
  } 

  return (
    <div className='players'>
        <div className="header-navigation__logo">
          <Link to='/'>
            <img src={logo} alt="NBA" className="header-navigation__logo--img" width="120"/>
          </Link>
        </div>      
      <TableMaterial players = {players}/>
      <div className="button-wrapper">
        <DefaultButton handler={ShowMorePlayers} textValue={"Show more"} />
        <DefaultButton handler={ShowAllPlayers} textValue={"Show all"} />
      </div>
      {games && games.map((game, index) => {
        return <div key={'' + game.startTimeUTC + index} className="team-page">
          <TeamCard 
            logo = {game.hTeam.logo}
            fullName = {game.hTeam.fullName}
            city = {game.hTeam.city}
            shortName = {game.hTeam.shortName}
            id = {game.hTeam.teamId}
          />
          <div className="game-info-wrapper">
            <h2 className="players-place-game">{game.city}</h2>
            <h2 className="players-place-game">{game.arena}</h2>
            <h2 className="players-score--h2">{game.hTeam.score.points} : {game.vTeam.score.points}</h2>
          </div>
          <TeamCard 
            logo = {game.vTeam.logo}
            fullName = {game.vTeam.fullName}
            city = {game.vTeam.city}
            id = {game.vTeam.teamId}     
          />
        </div>
      })}
      <div className="button-wrapper">
        <DefaultButton handler={ShowMoreGame} textValue={"Show more"} />
        <DefaultButton handler={ShowAllGame} textValue={"Show all"} />
      </div>
    </div>
  )
};
