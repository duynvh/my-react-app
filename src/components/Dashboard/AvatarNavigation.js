import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";


const styles = {
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150
  }
};

function AvatarNavigation(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="https://picsum.photos/200/300"
          className={classes.bigAvatar}
        />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" >
        <strong>
          Hi
        </strong>
      </Grid>
    </div>
  );
}

AvatarNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarNavigation);
