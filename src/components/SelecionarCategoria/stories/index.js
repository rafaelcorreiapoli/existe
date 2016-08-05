// components/stories/button.js

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FiltroCategoria from '../';

storiesOf('Filtro categoria', module)
  .add('com vagas', () => (
    <FiltroCategoria
      value=''
    />
  ))
