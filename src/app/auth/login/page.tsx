'use client';
import Link from 'next/link';
import { Input } from '@/components/auth/Input';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useLoginViewModel } from './login.viewmodel';
import styles from '../auth.module.css';

const Login = () => {
  const { handleChange, handleSubmit, errors } = useLoginViewModel();

  return (
    <>
      <h1 className={styles.header}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <>
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
          <div className={styles.btnWrapper}>
            <button type="submit" className={styles.btn}>
              Login
            </button>
          </div>
          <label className={styles.forgot}>
            <Link href="/auth/restore" className={styles.link}>
              Forgot password?
            </Link>
          </label>
          <div className={styles.nav}>
            <div>Or Sign Up Using</div>
            <Link href="/auth/register" className={styles.link}>
              Sign up
            </Link>
          </div>
        </>
      </form>
    </>
  );
};

export default Login;
