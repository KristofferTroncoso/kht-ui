import React from 'react';
import {Code} from '../Code';
import Renderer from 'react-test-renderer';

test('default', () => {
  const wrapper = Renderer.create(<Code render={`let i = 3`} />);
  expect(wrapper);
})