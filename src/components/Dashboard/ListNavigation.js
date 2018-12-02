import React from "react";
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

const listNavigations = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />
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
];

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class ListNavigation extends React.Component {
  state = {
    listNavigations: [
      {
        name: "Dashboard",
        icon: <DashboardIcon />
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
    selectedIndex : null
  };

  handleListItemClick = (event, i) => {
    console.log(event, i)
    this.setState({
      selectedIndex : i
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          {this.state.listNavigations.map((item, i) => (
            <ListItem key={i}
              button
              selected={this.state.selectedIndex === i}
              onClick={event => this.handleListItemClick(event, i)}
            >
              {item.icon}
              <ListItemText primary={item.name} />
            </ListItem>
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
