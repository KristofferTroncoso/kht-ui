import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Navbar } from '../src';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button>😀 😎 👍 💯</Button>
  ));   

storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar />
  ));