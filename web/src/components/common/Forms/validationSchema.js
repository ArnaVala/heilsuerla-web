import * as yup from 'yup'

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Of stutt!')
    .max(80, 'Too Long!')
    .required('Fylltu inn fullt nafn'),
  email: yup
    .string()
    .email('Athugaðu hvort netfangið sé rétt!').required('Athugaðu hvort netfangið sé rétt!'),
  message: yup
    .string()
    .required('Vinsamlegast skrifaðu skilaboð!')
})

export default validationSchema
