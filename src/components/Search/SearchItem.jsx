import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
    leftIcon: {
        marginRight: 10,
    },
    iconSmall: {
        fontSize: 20,
    }
};



class SearchItem extends Component {

    clickHandler = () => {
        console.log('clicked')
        this.props.dispatch({ type: 'ADD_FAVORITE', payload: { image_url: this.props.gif.images.original.url } })
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt=""
                        className={classes.media}
                        height="250"
                        image={this.props.gif.images.original.url}
                        title="Favorite Gif"
                    />
                </CardActionArea>
                <CardActions>
                    <Grid container
                    justify='center'>
                        <Button onClick={this.clickHandler} size="medium" variant="outlined" color="primary">
                            <FavoriteBorder className={classes.leftIcon} />
                            Favorite
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}


export default connect()(withStyles(styles)(SearchItem));
