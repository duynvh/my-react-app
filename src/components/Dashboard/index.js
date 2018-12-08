import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Grid from "@material-ui/core/Grid";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import AvatarNavigation from "./AvatarNavigation";
import ListNavigation from "./ListNavigation";
import BoxInformation from "./BoxInformation";
import MainContent from "./MainContent";
import ListItemInformation from "./ListItemInformation";
import { connect } from "react-redux";
import Profile from "../Profile/index";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Dashboard extends React.Component {
  state = {
    open: true,
    filter1: [],
    listData: [1, 2, 3, 4],
    socket: [],
    loading: false
  };

  componentDidMount() {
    console.log(this.props);
    // const socket = socketIOClient('http://52.193.53.226:5000');
    // socket.emit('message','haha')
    // socket.on("FromAPI", data => console.log(data));
    // const arrSocket = [];
    // const socket = socketIOClient("http://52.193.53.226:5000");
    // socket.on("message", data => {
    //   if (data) {
    //     const newData = JSON.parse(data);
    //     console.log(newData);
    //     arrSocket.push(newData);
    //   }
    //   this.setState({
    //     loading: false,
    //     socket: arrSocket
    //   });
    // });
    // socket.emit("message", "haha");
  }

  handleFilter1 = value => {
    this.setState({ filter1: value });
  };

  handleApply = () => {
    console.log(this.state.filter1);
    const newData = [...this.state.listData];
    this.setState(
      {
        listData:
          this.state.filter1.length > 0
            ? newData.filter(item => item === 1)
            : newData
      },
      console.log(newData)
    );
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    console.log(this.state.socket);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Pro Member Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <AvatarNavigation />
          <Divider />
          <ListNavigation />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <Switch>
            <Route
              path="/dashboard"
              exact
              render={() => (
                <Fragment>
                  <div className={classes.drawerHeader} />
                  <BoxInformation />
                  <MainContent
                    filter1={this.state.filter1}
                    handleFilter1={this.handleFilter1}
                    handleApply={this.handleApply}
                  />
                  <Grid container spacing={24}>
                    <ListItemInformation
                      loading={this.state.loading}
                      listData={this.state.socket}
                    />
                  </Grid>
                </Fragment>
              )}
            />
            <Route
              path="/dashboard/profile"
              render={() => (
                <Fragment>
                  <div className={classes.drawerHeader} />
                  <Profile />
                </Fragment>
              )}
            />
          </Switch>

          {/* <div className={classes.drawerHeader} />
          <BoxInformation />
          <MainContent
            filter1={this.state.filter1}
            handleFilter1={this.handleFilter1}
            handleApply={this.handleApply}
          />
          <Grid container spacing={24}>
            <ListItemInformation
              loading={this.state.loading}
              listData={this.state.socket}
            />
          </Grid> */}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    socket: state
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Dashboard)
);
