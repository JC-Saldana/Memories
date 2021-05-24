import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    height: 50,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '10px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  button: {
    width: 125,
    margin: 20,
  }
}));