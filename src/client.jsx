import ReactDOM from 'react-dom';
import Root from '@components/Root';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';



//
//  Boot
//
import 'client/boot'


//
//  Config
//
import 'client/config/accounts'

//
// Stubs
//

import 'client/stubs'

//
//  Models
//
import '@models'


//
//  Style
//
import 'flexboxgrid/css/flexboxgrid.css'

injectTapEventPlugin();

Meteor.startup(() => {
  Package['msavin:mongol'].Mongol.showCollection('projetos')
  Package['msavin:mongol'].Mongol.showCollection('areas')
  Package['msavin:mongol'].Mongol.showCollection('empresas')
  // window.addEventListener("keydown", function(e) {
  //     // space and arrow keys
  //     if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
  //         e.preventDefault();
  //     }
  // }, false);

  ReactDOM.render(
    <Root />,
    document.getElementById('react-app')
  );
});
