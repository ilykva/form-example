'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const { token, cleanError } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token) {
      router.push('/auth');
    } else {
      router.push('/dashboard');
    }
  }, [token]);

  useEffect(() => {
    cleanError();
  }, [pathname]);

  return children;
};
