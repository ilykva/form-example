import { useAuthStore } from '@/store/authStore';
import { useFormik } from 'formik';
import { validationSchema } from './login.validation';
import { useRef } from 'react';

export const useLoginViewModel = () => {
  const { login, error: serverError } = useAuthStore();
  const firstSubmit = useRef(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      firstSubmit.current = true;
      login(values);
    },
    validateOnChange: firstSubmit.current,
    validateOnBlur: firstSubmit.current,
    validationSchema,
  });

  return {
    serverError,
    errors,
    handleSubmit,
    handleChange,
  };
};
