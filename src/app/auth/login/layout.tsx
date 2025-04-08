import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import styles from '@/app/auth/auth.module.css';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Login page',
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <h1 className={styles.header}>Login</h1>
      {children}
    </>
  );
};

export default Layout;
