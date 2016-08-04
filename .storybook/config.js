import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Button/stories');
  require('../src/components/Select/stories');
  require('../src/components/ProjetoCard/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
