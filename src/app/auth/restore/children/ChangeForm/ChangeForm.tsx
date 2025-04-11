import { Input } from '@/components/auth/Input';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { useChangeFormViewModel } from './ChangeForm.viewmodel';
import styles from '@/app/auth/auth.module.css';

export const ChangeForm = () => {
  const { handleSubmit, handleChange, errors } = useChangeFormViewModel();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        error={errors.newPassword}
        type="password"
        label="New Password"
        icon={<LockClosedIcon />}
        placeholder="Type your password"
        name="newPassword"
        onChange={handleChange}
      />
      <Input
        error={errors.repeatNewPassword}
        type="password"
        label="Repeat New Password"
        icon={<LockClosedIcon />}
        placeholder="Type your password"
        name="repeatNewPassword"
        onChange={handleChange}
      />
      <div className={styles.btnWrapper}>
        <button type="submit" className={styles.btn}>
          <span>Change</span>
        </button>
      </div>
    </form>
  );
};
