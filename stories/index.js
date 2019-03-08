import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action, configureActions } from '@storybook/addon-actions';

import AfcInput from '../src/Components/AfcInput';


configureActions({
    depth: 100,
    // Limit the number of items logged into the actions panel
    limit: 20,
});


storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));


storiesOf('AfcInput', module)
    .add('with type and name', () => (
        <AfcInput type="input" name="sergio" onHandle={action('display logger')}></AfcInput>
    ), { notes: 'Aptos AfcInput Component, expect type, name and actions' });