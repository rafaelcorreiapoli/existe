import { Mongo } from 'meteor/mongo';

export const Projetos = new Mongo.Collection('projetos');
export const Areas = new Mongo.Collection('areas');
export const Cargos = new Mongo.Collection('cargos');
export const Empresas = new Mongo.Collection('empresas');
