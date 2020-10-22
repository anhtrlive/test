import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import {ActionCreator, Operation} from '../reducer';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    width: 100,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    size: 'medium'
  },
  
}));

export default function CustomizedSelects({leagues, activeLeague}) {
  const classes = useStyles();
  const [league, setLeague] = useState(activeLeague);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setLeague(evt.target.value);
    dispatch(ActionCreator.changeActiveLeague(evt.target.value))
    dispatch(Operation.loadTeamsByLeague(evt.target.value))
  };

  if (!leagues[0])  {
    return <div></div>
  }

  return (
      <FormControl className={classes.margin} >
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={league}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          {leagues && leagues.map((leaguesElement, index) => {
           return <MenuItem value={leaguesElement} key={leaguesElement + index}>{leaguesElement}</MenuItem>
          })}
        </Select>
      </FormControl>
  );
}
