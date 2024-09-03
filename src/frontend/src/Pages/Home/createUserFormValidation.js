import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
    username: Yup.string()
    .required('O username é obrigatório.'),
  
  password: Yup.string()
    .min(4, 'A senha deve ter no mínimo 4 caracteres.')
    .max(100, 'A senha deve ter no máximo 100 caracteres.')
    .required('A senha é obrigatória.'),
  
  job: Yup.string()
    .required('O trabalho é obrigatório.'),
  
  age: Yup.number()
    .typeError("O valor da idade deve ser um número") 
    .min(7, 'A idade mínima é 7 anos.')
    .max(120, 'A idade máxima é 120 anos.')
    .required('A idade é obrigatória.'),
  
  branchNumber: Yup.string()
    .length(4, 'O número da agência deve ter exatamente 4 caracteres.')
    .required('O número da agência é obrigatório.'),
  
  accountNumber: Yup.string()
    .length(5, 'O número da conta deve ter exatamente 5 caracteres.')
    .required('O número da conta é obrigatório.'),
  
  digito: Yup.string()
    .length(1, 'O dígito deve ter exatamente 1 caractere.')
    .required('O dígito é obrigatório.'),

  secret: Yup.string()
    .matches(/^\d{6,}$/, 'O campo secreto deve ter no mínimo 6 caracteres e conter apenas números.')
    .required('O campo secreto é obrigatório.'),
  
  balance: Yup.number()
    .typeError("O valor de balance deve ser um número") 
    .min(0, 'O saldo deve ser um número positivo ou zero.')
    .required('O saldo é obrigatório.')
    
})