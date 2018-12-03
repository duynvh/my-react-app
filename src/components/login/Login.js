import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import isEmpty from '../../validation/is-empty'
import { Link } from 'react-router-dom';

import { ReCaptcha } from 'react-recaptcha-google';
import { loginUser } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {NotificationContainer, NotificationManager} from 'react-notifications';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(420 + theme.spacing.unit * 3 * 2)]: {
        width: 420,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    button: {
      marginRight: theme.spacing.unit * 1,
    },
    boxes: {
        marginTop: theme.spacing.unit * 3,
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        marginLeft: theme.spacing.unit * 3
    }
});

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            recaptchaToken: '',
            errors: '',
            success: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.recaptchaToken !== "") {
            const user = {
                username: this.state.username,
                password: this.state.password
            };
            this.props.loginUser(user, this.props.history);
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidMount() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }

        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) 
    {
        const auth = nextProps.auth;
        console.log(auth)
        if (auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
    
        if (auth.error !== "") {
            this.setState({
                errors: auth.error    
            }, () => {
                this.resetMessage()    
            });
        }
    }

    onLoadRecaptcha = () => {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback = recaptchaToken => {
        this.setState({
            recaptchaToken
        });
        console.log(recaptchaToken, "<= your recaptcha token")
    }

    resetMessage() {
        setTimeout(()=>{this.setState({
          error: ''
        })}, 5000)
    }

    render() {
        const { classes } = this.props;
        console.log(this.state.errors)
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Login
                    </Typography>
                    <form onSubmit={this.onSubmit} className={classes.form}>
                    { this.state.error  && NotificationManager.error(this.state.error, '', 2000, () => {
                            alert('callback');
                        })}
                    <NotificationContainer/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input onChange={this.onChange} defaultValue={this.state.username} id="username" name="username" autoComplete="username" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input onChange={this.onChange} defaultValue={this.state.password} name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                   { this.state.errors !=="" && <FormControl>
                        <Paper>
                            <p style={{
                                width: '100%',
                                color: 'red'
                            }}> {this.state.errors} </p>
                        </Paper>
                    </FormControl>
                   }
                    <FormControl margin="normal" required fullWidth>
                        <ReCaptcha
                            ref={(el) => {this.captchaDemo = el;}}
                            render="explicit"
                            sitekey="6Lea2H0UAAAAAIFrJuHK92KVmeR8HDT2NF4hQNN2"
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                        />
                    </FormControl>
                    <div className={classes.boxes}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Log me in
                        </Button>
                        <Button
                            component={Link} 
                            to="/register"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Register
                        </Button>
                        <a href="#"><span className={classes.text}>Forgot Password?</span></a>
                    </div>
                    </form>
                </Paper>
            </main>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {loginUser})(withRouter(withStyles(styles)(Login)));