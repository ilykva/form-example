'use client';
import { useMemo, useEffect } from 'react';
import { ChangeForm } from './children/ChangeForm';
import { ConfirmForm } from './children/ConfirmForm';
import { EmailForm } from './children/EmailForm';
import { useAuthStore } from '@/store/authStore';
import styles from '@/app/auth/auth.module.css';

const Restore = () => {
  const { restoreStep, setRestoreStep } = useAuthStore();

  const renderStep = useMemo(() => {
    switch (restoreStep) {
      case 1:
        return <EmailForm />;
      case 2:
        return <ConfirmForm />;
      case 3:
        return <ChangeForm />;
    }
  }, [restoreStep]);

  useEffect(() => {
    return () => {
      setRestoreStep(1);
    };
  }, []);

  return (
    <div>
      <h1 className={styles.header}>Restore password</h1>
      {renderStep}
    </div>
  );
};

export default Restore;
