import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: "100%",
    marginTop: '20px'
  },
  input: {
    display: "none"
  }
});



function ContainedButtons(props) {
  
  const { classes, handleApply } = props;
  
  return (
    <div>
      <Button
        onClick={() => handleApply()}
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
