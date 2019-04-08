import React from 'react';
import {Button} from '../Button';
import Renderer from 'react-test-renderer';

test('default', () => {
  const wrapper = Renderer.create(<Button />);
  expect(wrapper).toMatchSnapshot()
})