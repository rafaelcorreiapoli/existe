import VMasker from 'vanilla-masker';

export const telefone = value => value && VMasker.toPattern(value, '(99) 9999-9999');
export const celular = value => value && VMasker.toPattern(value, '(99) 9999-99999');
export const cpf = value => value && VMasker.toPattern(value, '999.999.999-99');
