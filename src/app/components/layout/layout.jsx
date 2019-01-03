import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//api
import { logout } from '../../api/global';
import { isAuthenticated } from '../../routing/routeGuard';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navigateNav = (link, e) => {
        if (link === '/logout') {
            this.logoutUser();
        }
        else {
            this.props.history.push(link);
        }
    }

    logoutUser = () => {
        logout();
        this.props.history.push('/login');
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>

                        <Button
                            color="inherit"
                            onClick={(e) => this.navigateNav('/', e)}
                        >
                            Home
                            </Button>

                        {isAuthenticated() &&
                            <Button
                                color="inherit"
                                onClick={(e) => this.navigateNav('/user-management', e)}
                            >
                                User Management
                            </Button>
                        }
                        <span className={classes.grow} >
                        </span>
                        {isAuthenticated() &&
                            <Button
                                color="inherit"
                                onClick={(e) => this.navigateNav('/logout', e)}
                            >
                                Logout
                            </Button>
                        }
                        {!isAuthenticated() &&
                            <Button
                                color="inherit"
                                onClick={(e) => this.navigateNav('/login', e)}
                            >
                                Login
                            </Button>
                        }
                        {!isAuthenticated() &&
                            <Button
                                color="inherit"
                                onClick={(e) => this.navigateNav('/register', e)}
                            >
                                Register
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    withRouter,
)(Layout);