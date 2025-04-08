import { useAuthStore } from '@/store/authStore';
import { useFormik } from 'formik';
import { validationSchema } from './register.validation';
import { useRef } from 'react';

export const useRegisterViewModel = () => {
  const { registration, error: serverError } = useAuthStore();
  const firstSubmit = useRef(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      firstSubmit.current = true;
      registration(values);
    },
    validateOnBlur: firstSubmit.current,
    validateOnChange: firstSubmit.current,
    validationSchema,
  });

  return {
    serverError,
    errors,
    handleSubmit,
    handleChange,
  };
};
