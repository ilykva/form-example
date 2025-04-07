import * as Yup from 'yup';

export const validationSchema = Yup.object({
  confirmCode: Yup.string().required('This field is required'),
});
