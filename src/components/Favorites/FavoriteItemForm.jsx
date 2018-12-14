import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class FavoriteItemForm extends React.Component {
  state = {
    category: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="category-label-placeholder">
            Category
          </InputLabel>
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            input={<Input name="category" id="category-label-placeholder" />}
            displayEmpty
            name="category"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
          <Button variant="contained" color="primary" className={classes.button}>
            ADD
          </Button>
      </form>
    );
  }
}

FavoriteItemForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavoriteItemForm);
