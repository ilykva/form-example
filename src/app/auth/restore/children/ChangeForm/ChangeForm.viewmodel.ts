import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { validationSchema } from './ChangeForm.validation';
import { useRef } from 'react';

export const useChangeFormViewModel = () => {
  const { changePassword, setRestoreStep } = useAuthStore();
  const router = useRouter();
  const firstSubmit = useRef(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      newPassword: '',
      repeatNewPassword: '',
    },
    onSubmit: async ({ newPassword }) => {
      firstSubmit.current = true;
      changePassword(newPassword, () => {
        setRestoreStep(1);
        router.push('/auth/login');
      });
    },
    validationSchema,
    validateOnBlur: firstSubmit.current,
    validateOnChange: firstSubmit.current,
  });

  return {
    errors,
    handleSubmit,
    handleChange,
  };
};
