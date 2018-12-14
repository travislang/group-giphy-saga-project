import React from 'react';
import { connect } from 'react-redux';
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

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CATEGORIES' });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = event => {
    let catId = this.state.category;
    let favId = this.props.favId;
    this.props.dispatch({ type: 'ADD_CATEGORY', payload: { catId: catId, favId: favId } });
  }

  render() {
    const { classes } = this.props;
    let categoriesHtml = this.props.categories.map((category, i) => <MenuItem key={i} value={category.id}>{category.name}</MenuItem>);

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
            {categoriesHtml}
          </Select>
        </FormControl>
        <Button onClick={this.handleClick} variant="contained" color="primary" className={classes.button}>
          ADD
          </Button>
      </form>
    );
  }
}

FavoriteItemForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
  categories: reduxState.categoryList,
});

export default connect(mapStateToProps)(withStyles(styles)(FavoriteItemForm));
