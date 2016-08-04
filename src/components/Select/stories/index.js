// components/stories/button.js

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Select from '../';

storiesOf('Select', module)
  .add('with options', () => (
    <Select text="hello" />
  ))
  .add('with no options', () => (
    <Select />
  ));
