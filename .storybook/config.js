import { configure } from '@kadira/storybook';
import 'bootstrap/dist/css/bootstrap.min.css';
function loadStories() {
  require('../src/components/ProjetoCard/stories');
  require('../src/components/FiltroCategoria/stories');
  require('../src/components/OrdenarProjetos/stories');
  require('../src/components/FiltroArea/stories');
  // require as many stories as you need.
}

configure(loadStories, module);
