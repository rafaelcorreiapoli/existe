import React, { PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';


class ButtonPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
  }

  handleTouchTap = (event) => {
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

  _flatOptions(options) {
    const finalArray = [];
    this._pushMenuItemsToArray(options, finalArray);
    return finalArray;
  }

  _pushMenuItemsToArray(menuItems, array) {
    menuItems.forEach((menuItem) => {
      array.push(menuItem);
      if (menuItem.menuItems) {
        this._pushMenuItemsToArray(menuItem.menuItems, array);
      }
    })
  }

  getOptionFromValue(value) {
    const { options } = this.props;
    const flattenArray = this._flatOptions(options);
    return flattenArray.find((option) => {
      return option.value === value
    }) || {};
  }

  handleChange(value) {
    const { onChange } = this.props;
    onChange(value)
    this.handleRequestClose();
  }


  renderMenuItem(item, i) {
    let rightIcon;
    let onClick;
    if (item.menuItems) {
      rightIcon = <ChevronRight />
    }
    if (!item.noAction) {
      onClick = () => this.handleChange(item.value)
    }

    return (
      <MenuItem
        key={i}
        menuItems={item.menuItems && item.menuItems.map(this.renderMenuItem)}
        rightIcon={rightIcon}
        onClick={onClick}
        primaryText={item.label}
        leftIcon={item.icon}
      />
    );
  }
  render() {
    const {
      customButton,
      customButtonStyle,
      style,
      value,
      options,
      defaultText,
      onChange,
      ...props,
    } = this.props

    const {
      open,
      anchorEl,
    } = this.state

    const selectedOption = this.getOptionFromValue(value);

    const renderMenuItem = this.renderMenuItem;

    const button = customButton ? customButton : RaisedButton;

    return (
      <div style={style} {...props}>
        {
          React.createElement(button, {
            labelColor: 'black',
            onTouchTap: this.handleTouchTap,
            label: selectedOption.label || defaultText,
            labelPosition: 'after',
            icon: selectedOption.icon,
            style: customButtonStyle || { width: 300 },
          })
        }

        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu style={{ width: 300 }} autoWidth={false} listStyle={{ width: 300 }} >
            {
              options.map(renderMenuItem)
            }
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default ButtonPopover
