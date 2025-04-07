import * as Yup from 'yup';

export const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(8, 'Must be at least 8 characters long')
    .required('This field is required'),
  repeatNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .min(8, 'Must be at least 8 characters long')
    .required('This field is required'),
});
