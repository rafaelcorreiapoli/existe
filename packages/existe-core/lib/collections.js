import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');
export const Areas = new Mongo.Collection('areas');
export const Cargos = new Mongo.Collection('cargos');
export const Empresas = new Mongo.Collection('empresas');
