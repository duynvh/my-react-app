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
  const { classes, listData, loading } = props;

  return (
    <Fragment>
      { !loading
        ? listData.map((item,i) => (
            <Grid key={i} item sm={3}>
              <Card className={classes.card} selected>
                <CardContent>
                  <Typography align="center" variant="body2" gutterBottom>
                    Date: {item.UpdateTime}
                  </Typography>
                  <Typography align="center" variant="title" gutterBottom>
                    Name: {item.Name}
                  </Typography>
                  <Typography component="p">Price : {item.Price}</Typography>
                  <Typography component="p">Hi 24h : {item.Hi24hr}</Typography>
                  <Typography component="p">Lo 24h: {item.Lo24hr}</Typography>
                  <Typography component="p">Vol 24h: {item.Vol24hr}</Typography>
                  <Typography component="p">
                    Total Execution Order:{item.TotalExecutionOrder}
                  </Typography>{" "}
                  <Typography component="p">Total Bought Order: {item.TotalBoughtOrder}</Typography>{" "}
                  <Typography component="p">Total Sold Order: {item.TotalSoldOrder}</Typography>
                  <Typography component="p">
                    Bought Value: {item.TotalBoughtValue}
                  </Typography>
                  <Typography component="p">
                    Sold Value: {item.TotalSoldValue}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        : "loading"}
    </Fragment>
  );
}

ListItemInformation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItemInformation);
