// components/stories/button.js

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import OrdenarProjetos from '../';

storiesOf('Ordenar projeto', module)
  .add('com vagas', () => (
    <OrdenarProjetos
      value=''
    />
  ))
