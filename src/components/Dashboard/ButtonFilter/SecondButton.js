import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SecondButton extends React.Component {
  state = {
    age: ""
  };

  omponentDidMount() {}

  handleChange = event => {
    this.setState({ age: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Current Sort</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            <MenuItem value={10}>Buy 50-70%</MenuItem>
            <MenuItem value={20}>Sale >50%</MenuItem>
            <MenuItem value={30}>Sale 50-70%</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

SecondButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SecondButton);
