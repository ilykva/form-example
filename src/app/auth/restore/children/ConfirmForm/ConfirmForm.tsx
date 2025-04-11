import { Input } from '@/components/auth/Input';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useConfirmFormViewModel } from './ConfirmForm.viewmodel';
import styles from '@/app/auth/auth.module.css';

export const ConfirmForm = () => {
  const { handleSubmit, handleChange, errors } = useConfirmFormViewModel();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        error={errors.confirmCode}
        type="text"
        label="Confirm code"
        icon={<ShieldCheckIcon />}
        placeholder="Type confirm code"
        name="confirmCode"
        onChange={handleChange}
      />
      <div className={styles.btnWrapper}>
        <button type="submit" className={styles.btn}>
          <span>Restore</span>
        </button>
      </div>
    </form>
  );
};
