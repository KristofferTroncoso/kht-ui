import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  //load additional stories here
}

configure(loadStories, module);