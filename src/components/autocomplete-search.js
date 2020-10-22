import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';
import {ActionCreator, Operation} from '../reducer';
import {useDispatch, useSelector} from 'react-redux';

const groupFilterName = {
  key: ['city', 'name'],
}

export default function Grouped({teams}) {
  const dispatch = useDispatch()
  const activeLeague = useSelector(state => state.activeLeague)

  const options1 = teams.map((option) => {
    const value = Object.values(option);
    return {
      key: groupFilterName.key[0],
      value: value[0]
    };
  });

  const options2 = teams.map((option) => {
    const value = Object.values(option);
    return {
      key: groupFilterName.key[1],
      value: value[1]
    };
  });

  const options = [...options1, ...options2].filter(el => el.value)

  const handleChange = (_, value) => {
    const newValue = value ? value.value : false;
    if (newValue) {
      dispatch(ActionCreator.filterTeams(value.value, teams))
    } else {
      dispatch(Operation.loadTeamsByLeague(activeLeague))
    }
  }

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.key.localeCompare(a.key))}
      groupBy={(option) => option.key}
      getOptionLabel={(option) => option.value}
      style={{ width: `100%`, marginTop: 20 }}
      getOptionSelected={() => true}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="City or team name" variant="outlined" />}
    />
  );
}