import { useAuthStore } from '@/store/authStore';
import { useFormik } from 'formik';
import { validationSchema } from './register.validation';

export const useRegisterViewModel = () => {
  const { registration } = useAuthStore();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      registration(values);
    },
    validationSchema,
  });

  return {
    errors,
    handleSubmit,
    handleChange,
  };
};
