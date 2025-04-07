import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './auth.module.css';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={clsx(styles.firstBlock, styles.absolute)} />
      <div className={clsx(styles.secondBlock, styles.absolute)} />
      <div className={clsx(styles.thirdBlock, styles.absolute)} />
      <div className={styles.card}>{children}</div>
    </div>
  );
};

export default Layout;
