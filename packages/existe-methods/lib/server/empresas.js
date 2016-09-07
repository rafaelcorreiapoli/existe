import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { UserSchema, EmpresaSchema } from 'meteor/existe:schemas'
import { Empresas } from 'meteor/existe:models'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const atualizarCadastro = new ValidatedMethod({
  name: 'Empresas.methods.cadastro',
  validate: EmpresaSchema.validator(),
  run(doc) {
    Meteor.isDevelopment && Meteor._sleepForMs(1000)

    // const userDoc = {
    //   usuario: doc.usuario,
    //   senha: doc.senha,
    //   email: doc.email,
    //   profile: {
    //     nomeCompleto: doc.nomeCompleto,
    //     dataNascimento: doc.dataNascimento,
    //     celular: doc.celular,
    //     telefone: doc.telefone
    //   }
    // }
    //
    // const empresaDoc = {
    //   tipoEmpresa: doc.tipoEmpresa,
    //   areaAtuacao: doc.areaAtuacao,
    //   site: doc.site,
    //   endereco: doc.endereco,
    //   cnpj: doc.cnpj,
    //   biografia: doc.biografia,
    //   funcoes: doc.funcoes,
    //   pagamentoPreferencial: doc.pagamentoPreferencial,
    // }

    return Empresas.insert(doc)
  }
})
