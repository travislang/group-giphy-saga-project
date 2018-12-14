import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteItemForm from './FavoriteItemForm';
import { withStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './FavoriteItem.css'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 190,
  },
};

class FavoriteItem extends Component {

  handleClick = event => {
    this.props.dispatch({ type: 'REMOVE_FAVORITE', payload: this.props.favorite.id });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="favorite-item">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.props.favorite.image_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Category: {this.props.favorite.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <FavoriteItemForm favId={this.props.favorite.id} />
            <Button size="small" color="secondary" onClick={this.handleClick}>
              <Delete />
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(FavoriteItem));
