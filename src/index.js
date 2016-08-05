import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import asteroid from './asteroid';

ReactDOM.render(<Root />, document.getElementById('root'));
