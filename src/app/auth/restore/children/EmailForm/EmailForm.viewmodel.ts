import { useFormik } from 'formik';
import { useAuthStore } from '@/store/authStore';
import { validationSchema } from './EmailForm.validation';
import { useRef } from 'react';

export const useEmailFormViewModel = () => {
  const { restore, setRestoreStep, error: serverError } = useAuthStore();
  const firstSubmit = useRef(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async ({ email }) => {
      firstSubmit.current = true;
      restore(email, () => {
        setRestoreStep(2);
      });
    },
    validationSchema,
    validateOnBlur: firstSubmit.current,
    validateOnChange: firstSubmit.current,
  });

  return {
    serverError,
    errors,
    handleSubmit,
    handleChange,
  };
};
