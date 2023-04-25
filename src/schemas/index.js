import * as yup from 'yup'

export const clientSchema = yup.object().shape({
  firstName: yup.string().required('This field is requiredv'),
  lastName: yup.string().required('This field is required'),
  birthDate: yup
    .date()
    .required('This field is required')
    .max(new Date(), 'The date of birth must be before the actual date'),
  age: yup.number().positive().integer().required('Required'),
})
