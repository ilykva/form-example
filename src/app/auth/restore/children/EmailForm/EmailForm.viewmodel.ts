import { useFormik } from 'formik';
import { useAuthStore } from '@/store/authStore';
import { validationSchema } from './EmailForm.validation';

export const useEmailFormViewModel = () => {
  const { restore, setRestoreStep } = useAuthStore();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async ({ email }) => {
      restore(email, () => {
        setRestoreStep(2);
      });
    },
    validationSchema,
  });

  return {
    errors,
    handleSubmit,
    handleChange,
  };
};
