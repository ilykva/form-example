import Link from 'next/link';
import { Input } from '@/components/auth/Input';
import { UserIcon } from '@heroicons/react/24/outline';
import { useEmailFormViewModel } from './EmailForm.viewmodel';
import styles from '@/app/auth/auth.module.css';

export const EmailForm = () => {
  const { handleSubmit, handleChange, errors, serverError } =
    useEmailFormViewModel();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        error={errors.email}
        type="email"
        label="Email"
        icon={<UserIcon />}
        placeholder="Type your email"
        name="email"
        onChange={handleChange}
      />
      <div className={styles.btnWrapper}>
        <button type="submit" className={styles.btn}>
          Restore
        </button>
        {serverError && <div className={styles.error}>{serverError}</div>}
      </div>
      <div className={styles.nav}>
        <div>Remember account?</div>
        <Link href="/auth/login" className={styles.link}>
          Login
        </Link>
      </div>
    </form>
  );
};
