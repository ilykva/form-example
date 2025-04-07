import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { validationSchema } from './ChangeForm.validation';

export const useChangeFormViewModel = () => {
  const { changePassword, setRestoreStep } = useAuthStore();
  const router = useRouter();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      newPassword: '',
      repeatNewPassword: '',
    },
    onSubmit: async ({ newPassword }) => {
      changePassword(newPassword, () => {
        setRestoreStep(1);
        router.push('/auth/login');
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
