import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import Divider from "@material-ui/core/Divider";

const styles = {
  card: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function ListItemInformation(props) {
  const { classes, listData } = props;
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Fragment>
      {listData.map(item => (
        <Grid key={item} item sm={3}>
          <Card className={classes.card} selected>
            <CardContent>
            <Typography align="center" variant="body2" gutterBottom>
                Name: 11:59 Nov 04,2018
              </Typography>
              <Typography align="center" variant="title" gutterBottom>
                Name: BCCBTC
              </Typography>
              <Typography component="p">Price : xxxxxx</Typography>
              <Typography component="p">Hi 24h : xxxxxx</Typography>
              <Typography component="p">Lo 24h: 0.06650000</Typography>
              <Typography component="p">Vol 24h: 3922.9900424</Typography>
              <Typography component="p">Total Execution Order: 252</Typography>{" "}
              <Typography component="p">Total Bought Order: 103</Typography>{" "}
              <Typography component="p">Total Sold Order: 149</Typography>
              <Typography component="p">Bought Value: 14.9916 (52.65%)</Typography>
              <Typography component="p">Sold Value: 13.4847 (47.35%)</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Fragment>
  );
}

ListItemInformation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItemInformation);
