import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {IndexLink, Link} from 'react-router'
import Drawer from 'material-ui/Drawer';

import './header.css'

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login"/>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            logged: true
        };
    }

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="首页"
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        containerStyle={{marginTop: 64}}
                >

                    <IndexLink to='/'>
                        <MenuItem onTouchTap={this.handleClose}>
                            首页
                        </MenuItem>
                    </IndexLink>
                    <Link to='/notFound'>
                        <MenuItem onTouchTap={this.handleClose}>
                            404
                        </MenuItem>
                    </Link>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>

                </Drawer>

            </div>
        );
    }
}

export default AppBarExampleComposition;

