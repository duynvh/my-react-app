import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FirstButton from "./ButtonFilter/FirstButton";
import ButtonApply from "./ButtonApply";
import SecondButton from "./ButtonFilter/SecondButton";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: "25px"
  }
});

function MainContent(props) {
  // console.log(props)
  const { classes, handleFilter1, filter1 } = props;

  return (
    <div
      style={{
        marginTop: "25px"
      }}
    >
      <Grid container spacing={24}>
        <Grid item sm={3} xs={12}>
          <FirstButton handleFilter1={handleFilter1} />
        </Grid>
        <Grid item sm={3} xs={12}>
          <SecondButton />
        </Grid>
        <Grid item sm={3} xs={12}>
        <SecondButton />
        </Grid>
        <Grid item sm={3} xs={12}>
          <ButtonApply handleApply={props.handleApply} />
        </Grid>
      </Grid>
    </div>
  );
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContent);
