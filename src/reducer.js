const initialState = {
  leagues: [],
  teams: [],
  activeLeague: 'standard',
  players: [],
  games: [],
};

const Operation = {
  loadLeagues: () => async (dispatch, _, api) => {
    const response = await api.get(`/leagues/`);
    dispatch(ActionCreator.loadLeagues(response.data.api.leagues));
  },
  loadTeamsByLeague: (league = initialState.activeLeague) => async (dispatch, _, api) => {
    const response = await api.get(`/teams/league/${league}`);
    dispatch(ActionCreator.loadTeamsByLeague(response.data.api.teams));
  },
  loadPlayers: (id) => async (dispatch, _, api) => {
    const response = await api.get(`players/teamId/${id}`);
    dispatch(ActionCreator.loadPlayers(response.data.api.players));
  },
  loadGames: (id) => async (dispatch, _, api) => {
    const response = await api.get(`games/teamId/${id}`);
    dispatch(ActionCreator.loadGames(response.data.api.games));
  },
};

const ActionCreator = {
  loadLeagues: (leagues) => ({
    type: `LOAD_LEAGUES`,
    payload: leagues
  }),
  loadTeamsByLeague: (teams) => ({
    type: `LOAD_TEAMS_BY_LEAGUE`,
    payload: teams
  }),  
  changeActiveLeague: (league) => ({
    type: `CHANGE_ACTIVE_LEAGUE`,
    payload: league
  }),  
  loadPlayers: (team) => ({
    type: `LOAD_PLAYERS`,
    payload: team
  }),  
  loadGames: (games) => ({
    type: `LOAD_GAMES`,
    payload: games
  }),
  filterTeams: (value, teams) => {
    const filteredTeams =  teams.filter(team => {
     return team.city === value || team.fullName === value
    })
    return {
      type: `FILTER_BY_CITY_OR_TEAM_NAME`,
      payload: filteredTeams,
    };
  },  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_LEAGUES`:
      return {...state, ...{leagues: action.payload}};
    case `LOAD_TEAMS_BY_LEAGUE`:
        return {...state, ...{teams: action.payload}};      
    case `FILTER_BY_CITY_OR_TEAM_NAME`:
        return {...state, ...{teams: action.payload}};      
    case `LOAD_PLAYERS`:
        return {...state, ...{players: action.payload}};      
    case `CHANGE_ACTIVE_LEAGUE`:
        return {...state, ...{activeLeague: action.payload}};      
    case `LOAD_GAMES`:
        return {...state, ...{games: action.payload}};      
    case `SET_USER`:
        return {...state, ...{games: action.payload}};      
    default:
      return state;
  }
}

export {reducer, ActionCreator, Operation}
