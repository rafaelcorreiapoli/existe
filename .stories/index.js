import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ListaUsuarios from '@components/ListaUsuarios'
import BuscaUsuarioInput from '@components/BuscaUsuarioInput'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '@config/theme'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mockUsuarios = [
  {
    _id: '1',
    imagem: 'http://placehold.it/40x40',
    nomeCompleto: 'Rafael Ribeiro Correia',
    usuario: 'rafaelcorreiapoli',
  },
  {
    _id: '2',
    imagem: 'http://placehold.it/40x40',
    nomeCompleto: 'Marcela Marques',
    usuario: 'mahmarques',
  },
]

const materialStoriesOf = (name, module) =>
  storiesOf(name, module)
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={muiTheme}>
      {story()}
    </MuiThemeProvider>
  ))

materialStoriesOf('ListaUsuarios', module)
  .add('com usuários', () => (
    <ListaUsuarios
      usuarios={mockUsuarios}
    />
  ))

materialStoriesOf('BuscaUsuarioInput', module)
  .add('default', () => (
    <BuscaUsuarioInput
      value="rafa"
      usuarios={mockUsuarios}
      onChange={action('Usuario selecionado')}
    />
  ))
