import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('This field is required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters long')

    .required('This field is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .min(8, 'Must be at least 8 characters long')
    .required('This field is required'),
});
