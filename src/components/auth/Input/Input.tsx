import { FC, InputHTMLAttributes, ReactElement } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'number';
  label: string;
  error?: string;
  dirty?: boolean;
  icon?: ReactElement;
}

export const Input: FC<InputProps> = ({
  label,
  className,
  error,
  icon,
  ...props
}) => {
  return (
    <label className={styles.inputWrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.wrapper}>
        <input className={clsx(styles.input, className)} {...props} />
        <div className={styles.icon}>{icon}</div>
      </div>

      {error && (
        <div className={styles.error}>
          <span>{error}</span>
        </div>
      )}
    </label>
  );
};
