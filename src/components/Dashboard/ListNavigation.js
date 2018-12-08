import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";
import Assignment from "@material-ui/icons/Assignment";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AttachMoney from "@material-ui/icons/AttachMoney";
import PhoneInTalk from "@material-ui/icons/PhoneInTalk";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
});

class ListNavigation extends React.Component {
  state = {
    listNavigations: [
      {
        name: "Dashboard",
        icon: <DashboardIcon />,
        subItems: [{ name: "", icon: <DashboardIcon /> }]
      },
      {
        name: "Profile",
        icon: <Settings />
      },
      {
        name: "Wallet",
        icon: <Assignment />
      },
      {
        name: "My Team",
        icon: <Home />
      },
      {
        name: "Product",
        icon: <ShoppingCart />
      },
      {
        name: "Comission",
        icon: <AttachMoney />
      },
      {
        name: "2FA",
        icon: <PhoneInTalk />
      }
    ],
    selectedIndex: null
  };

  handleListItemClick = (event, i, name) => {
    console.log(i);
    this.setState({
      selectedIndex: i,
      [name]: !this.state[name]
    });
  };

  render() {
    console.log(this.state);
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          {this.state.listNavigations.map((item, i) => (
            <Fragment key={i}>
              <ListItem
                button
                selected={this.state.selectedIndex === i}
                onClick={event => this.handleListItemClick(event, i, item.name)}
              >
                {item.icon}
                <ListItemText primary={item.name} />
                {item.subItems && item.subItems.length > 0 ? (
                  this.state[item.name] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItem>
              {item.subItems && item.subItems.length > 0 && (
                <Collapse
                  in={this.state[item.name]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText inset primary="Starred" />
                    </ListItem>
                  </List>
                </Collapse>
              )}
            </Fragment>
          ))}
        </List>
      </div>
    );
  }
}

ListNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListNavigation);
