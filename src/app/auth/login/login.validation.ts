import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('This field is required'),
  password: Yup.string().required('This field is required'),
});
