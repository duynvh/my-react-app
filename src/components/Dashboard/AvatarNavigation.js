import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

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
      <Grid container direction="row" justify="center" alignItems="center">
        <strong>Hi</strong>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Chip
          style={{
            margin: "10px 0px",
            maxWidth: "200px",
            overflow: "hidden"
          }}
          avatar={<Avatar>MB</Avatar>}
          label={<p>dsadsadsadd fdsfdsf </p>}
          clickable
          className={classes.chip}
          color="primary"
          // onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
      </Grid>
    </div>
  );
}

AvatarNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarNavigation);
