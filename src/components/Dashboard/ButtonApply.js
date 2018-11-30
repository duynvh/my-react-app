import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  input: {
    display: "none"
  }
});

const handleClick = e => {
  console.log(e);
};

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        onClick={e => handleClick(e)}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Apply
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
