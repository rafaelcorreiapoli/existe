// components/stories/button.js

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../';

storiesOf('Button', module)
  .add('with text', () => (
    <Button text="hello" />
  ))
  .add('with no text', () => (
    <Button />
  ));
