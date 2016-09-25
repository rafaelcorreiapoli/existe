import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FiltroArea from '../';

storiesOf('Filtro area', module)
  .add('com vagas', () => (
    <FiltroArea
      value=''
    />
  ))
