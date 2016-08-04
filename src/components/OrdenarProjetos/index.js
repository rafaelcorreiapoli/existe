import React, { PropTypes } from 'react'
import IconDropdown from '../IconDropdown';
//import { IconDropdown, MenuItem } from 'react-bootstrap';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ActionAndroid from 'material-ui/svg-icons/content/add-circle-outline';

const options = [{
  icon: 'calendar-o',
  text: 'MAIS RECENTES',
  value: 'recentes'
},
{
  icon: 'line-chart',
  text: 'TRENDING',
  value: 'trending'
},
{
  icon: 'users',
  text: 'MAIS SEGUIDOS',
  value: 'seguidores'
},
{
  icon: 'heart',
  text: 'MAIS CURTIDOS',
  value: 'curtidas'
},
{
  icon: 'circle',
  text: 'COM VAGAS',
  value: 'vagas'
}];


export default class OrdenarProjetos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" leftIcon={<ActionAndroid />} />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default OrdenarProjetos
