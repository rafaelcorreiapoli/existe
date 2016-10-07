import { configure } from '@kadira/storybook';
import '../src/client/style/style.css'
function loadStories() {
  require('../.stories');
}

configure(loadStories, module);
