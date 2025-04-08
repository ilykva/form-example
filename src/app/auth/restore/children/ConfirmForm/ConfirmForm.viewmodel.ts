import { useFormik } from 'formik';
import { useAuthStore } from '@/store/authStore';
import { validationSchema } from './ConfirmForm.validation';
import { useRef } from 'react';

export const useConfirmFormViewModel = () => {
  const { confirmRestore, setRestoreStep, error: serverError } = useAuthStore();
  const firstSubmit = useRef(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      confirmCode: '',
    },
    onSubmit: async ({ confirmCode }) => {
      firstSubmit.current = true;
      confirmRestore(confirmCode, () => {
        setRestoreStep(3);
      });
    },
    validationSchema,
    validateOnChange: firstSubmit.current,
    validateOnBlur: firstSubmit.current,
  });

  return {
    serverError,
    errors,
    handleSubmit,
    handleChange,
  };
};
