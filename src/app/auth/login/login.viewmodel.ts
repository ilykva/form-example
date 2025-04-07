import { useAuthStore } from '@/store/authStore';
import { useFormik } from 'formik';
import { validationSchema } from './login.validation';

export const useLoginViewModel = () => {
  const { login } = useAuthStore();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      login(values);
    },
    validationSchema,
  });

  return {
    errors,
    handleSubmit,
    handleChange,
  };
};
