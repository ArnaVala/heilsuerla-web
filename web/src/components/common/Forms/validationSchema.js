import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Of stutt!').max(50, 'Of langt!').required('Vinsamlegast fylltu út reitinn.'),
  email: Yup.string().email('Vinsamlegast fylltu út rétt netfang.').required('Netfang er krafist.'),
  message: Yup.string().required('Hættu þessu.')
})

export default validationSchema
