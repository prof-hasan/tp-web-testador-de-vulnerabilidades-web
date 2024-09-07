import * as Yup from 'yup';


export const userLoginValidationSchema = Yup.object({
    username: Yup.string()
    .required('O username é obrigatório.'),
  
  password: Yup.string()
    .min(4, 'A senha deve ter no mínimo 4 caracteres.')
    .max(100, 'A senha deve ter no máximo 100 caracteres.')
    .required('A senha é obrigatória.'),
  
  
    
})