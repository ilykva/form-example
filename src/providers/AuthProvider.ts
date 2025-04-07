'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const { token } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    console.log(token, 'token');
    if (!token) {
      router.push('/auth');
    } else {
      router.push('/dashboard');
    }
  }, [token]);

  return children;
};
