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

import { ReCaptcha } from 'react-recaptcha-google';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/auth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
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
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    boxes: {
        marginTop: theme.spacing.unit * 3,
        display: 'flex',
        alignItems: 'center'
    },
    boxesItem: {
        marginLeft: theme.spacing.unit * 2,
    },
    text: {
        marginLeft: theme.spacing.unit * 20,
    }
});

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            username: '',
            password: '',
            telephone: '',
            recaptchaToken: '',
            errors: {}
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.recaptchaToken !== "") {
            const user = {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                telephone: this.state.telephone
            };
            this.props.registerUser(user, this.props.history);
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
        console.log(this.props.auth);
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
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Register
                    </Typography>
                    <form onSubmit={this.onSubmit} className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="fullname">Username</InputLabel>
                        <Input onChange={this.onChange} defaultValue={this.state.username} id="username" name="username" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input onChange={this.onChange} defaultValue={this.state.email} id="email" name="email" autoComplete="email" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" onChange={this.onChange} defaultValue={this.state.password} id="password" name="password" autoComplete="password" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="telephone">Phone</InputLabel>
                        <Input onChange={this.onChange} defaultValue={this.state.telephone} id="telephone" name="telephone" autoComplete="telephone" />
                    </FormControl>
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
                            Register
                        </Button>
                        <Link to="/login"><span className={classes.text}>Sign me in!</span></Link>
                    </div>
                    </form>
                </Paper>
            </main>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {registerUser})(withRouter(withStyles(styles)(Register)));