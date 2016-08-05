import React, { PropTypes } from 'react'
import ButtonPopover from '../ButtonPopover';

import { Todos, ExisteOficial, Independente, Empresarial, Troca } from '../../resources/icons';

// export default class SelecionarCategoria extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       open: false,
//     };
//   }
//
//   handleTouchTap = (event) => {
//     // This prevents ghost click.
//     event.preventDefault();
//
//     this.setState({
//       open: true,
//       anchorEl: event.currentTarget,
//     });
//   };
//
//   handleRequestClose = () => {
//     this.setState({
//       open: false,
//     });
//   };
//
//   render() {
//     const {
//       style,
//       ...props
//     } = this.props
//     return (
//       <div style={style}>
//         <RaisedButton
//           style={{width: 300}}
//           onTouchTap={this.handleTouchTap}
//           label="EXISTE TODOS"
//           labelPosition="before"
//           icon={<ArrowDropDown />}
//         />
//         <Popover
//           open={this.state.open}
//           anchorEl={this.state.anchorEl}
//           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
//           targetOrigin={{horizontal: 'left', vertical: 'top'}}
//           onRequestClose={this.handleRequestClose}
//         >
//           <Menu style={{width: 300}} autoWidth={false} >
//             <MenuItem primaryText="Refresh" />
//             <MenuItem primaryText="Help &amp; feedback" />
//             <MenuItem primaryText="Settings" />
//             <MenuItem primaryText="Sign out" />
//           </Menu>
//         </Popover>
//       </div>
//     );
//   }
// }





const options = [
  {
    text: 'TODOS',
    icon: <Todos />,
    value: 'todos'
  },
  {
    text: 'EXISTE OFICIAL',
    icon: <ExisteOficial />,
    value: 'oficial'
  },
  {
    text: 'EXISTE INDEPENDENTE',
    icon: <Independente />,
    value: 'independente'
  },
  {
    text: 'EXISTE EMPRESARIAL',
    icon: <Empresarial />,
    value: 'empresarial'
  },
  {
    text: 'EXISTE TROCA',
    icon: <Troca />,
    value: 'troca'
  },
]

const SelecionarCategoria = ({
  value,
  onChange,
  style,
  ...props
}) => {
  return (
    <ButtonPopover
      style={style}
      onChange={onChange}
      defaultText={'CATEGORIAS'}
      value={value}
      options={options}
      {...props}
    />
  )
}

export default SelecionarCategoria
