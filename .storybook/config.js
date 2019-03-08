import { configure, addParameters } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

addParameters({
    options: {
      name: 'Aptos',
      isFullScreen: false,
      showPanel: true,
      // more configuration here
    },
  });

configure(loadStories, module);