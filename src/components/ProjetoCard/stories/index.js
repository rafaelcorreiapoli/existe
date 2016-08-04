// components/stories/button.js

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ProjetoCard from '../';

storiesOf('Carta de Projeto', module)
  .add('com vagas', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={true}
      trending={false}
      colaborando={true}
      salvou={true}
      seguindo={true}
      favoritou={true}
      marcado={true}
      marcadoNovo={false}
      convidado={true}
      convidadoNovo={false}
    />
  ))
  .add('sem vagas', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={false}
      colaborando={true}
      salvou={true}
      seguindo={true}
      favoritou={true}
      marcado={true}
      marcadoNovo={false}
      convidado={true}
      convidadoNovo={false}
    />
  ))
  .add('sem nenhum icone lateral', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={false}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={false}
      marcadoNovo={false}
      convidado={false}
      convidadoNovo={false}
    />
  ))
  .add('projeto trending', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={true}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={false}
      marcadoNovo={false}
      convidado={false}
      convidadoNovo={false}
    />
  ))
  .add('há marcações, nenhuma nova', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={true}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={true}
      marcadoNovo={false}
      convidado={false}
      convidadoNovo={false}
    />
  ))
  .add('há marcações novas', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={true}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={true}
      marcadoNovo={true}
      convidado={false}
      convidadoNovo={false}
    />
  ))
  .add('há convites e marcações novos', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={true}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={true}
      marcadoNovo={true}
      convidado={true}
      convidadoNovo={true}
    />
  ))
  .add('projeto em produção', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={12}
      numeroComentarios={25}
      numeroLikes={20}
      temVagas={false}
      trending={true}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={true}
      marcadoNovo={true}
      convidado={true}
      convidadoNovo={true}
      status={2}
    />
  ))
  .add('nenhum colaborador, mensagem, nem link', () => (
    <ProjetoCard
      numeroColaboradores={10}
      image='http://www.colorbarsvideo.com.br/imagens-y/informacoes/producao-video-clipe-01.jpg'
      nome={'EXTRA | GRAFITE COLETIVO'}
      nomeUsuario={'EXISTEemSP'}
      data={'Março 31, 2016'}
      numeroUsers={0}
      numeroComentarios={0}
      numeroLikes={0}
      temVagas={false}
      trending={true}
      colaborando={false}
      salvou={false}
      seguindo={false}
      favoritou={false}
      marcado={true}
      marcadoNovo={true}
      convidado={true}
      convidadoNovo={true}
    />
  ))
