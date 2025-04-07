import { useFormik } from 'formik';
import { useAuthStore } from '@/store/authStore';
import { validationSchema } from './ConfirmForm.validation';

export const useConfirmFormViewModel = () => {
  const { confirmRestore, setRestoreStep } = useAuthStore();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      confirmCode: '',
    },
    onSubmit: async ({ confirmCode }) => {
      confirmRestore(confirmCode, () => {
        setRestoreStep(3);
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
