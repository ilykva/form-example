'use client';
import Link from 'next/link';
import { Input } from '@/components/auth/Input';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useRegisterViewModel } from './register.viewmodel';
import styles from '@/app/auth/auth.module.css';

const Register = () => {
  const { handleChange, handleSubmit, errors } = useRegisterViewModel();

  return (
    <div>
      <h1 className={styles.header}>Sign up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          error={errors.email}
          type="email"
          label="Email"
          icon={<UserIcon />}
          placeholder="Type your username"
          name="email"
          onChange={handleChange}
        />
        <Input
          error={errors.password}
          type="password"
          label="Password"
          icon={<LockClosedIcon />}
          placeholder="Type your password"
          name="password"
          onChange={handleChange}
        />
        <Input
          error={errors.repeatPassword}
          type="password"
          label="Repeat password"
          icon={<LockClosedIcon />}
          placeholder="Type your password"
          name="repeatPassword"
          onChange={handleChange}
        />
        <div className={styles.btnWrapper}>
          <button type="submit" className={styles.btn}>
            Sign up
          </button>
        </div>
        <div className={styles.nav}>
          <div>Already have an account?</div>
          <Link href="/auth/login" className={styles.link}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
