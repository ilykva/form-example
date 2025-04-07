'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AuthValues = {
  email: string;
  password: string;
  code?: string;
};

interface AuthState {
  token: string | null;
  error: string | null;
  restoreStep: number;
  setRestoreStep: (step: number) => void;
  loading: boolean;
  login: (values: AuthValues) => void;
  registration: (values: AuthValues) => void;
  restore: (email: string, callback?: () => void) => void;
  confirmRestore: (code: string, callback?: () => void) => void;
  changePassword: (password: string, callback?: () => void) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      token: null,
      error: null,
      loading: false,
      restoreStep: 1,
      setRestoreStep: (step: number) => {
        set({
          restoreStep: step,
        });
      },
      login: async ({ email, password }) => {
        set({ loading: true });
        try {
          const response = await new Promise<{ token: string }>(
            (resolve, reject) => {
              setTimeout(() => {
                if (
                  email === 'user@example.com' &&
                  password === 'password123'
                ) {
                  resolve({ token: 'fake-jwt-token' });
                } else {
                  reject('Invalid email or password');
                }
              }, 1000);
            },
          );
          set({ token: response.token, loading: false });
        } catch (error) {
          console.error(error);
        }
      },
      registration: async ({ email, password }) => {
        set({ loading: true });
        try {
          const response = await new Promise<{ token: string }>(
            (resolve, reject) => {
              setTimeout(() => {
                if (
                  email === 'user@example.com' &&
                  password === 'password123'
                ) {
                  resolve({ token: 'fake-jwt-token' });
                } else {
                  reject('Invalid email or password');
                }
              }, 1000);
            },
          );
          set({ token: response.token, loading: false });
        } catch (error) {
          console.error(error);
        }
      },
      restore: async (email: string, callback?: () => void) => {
        try {
          const response = await new Promise<{ data: string; status: number }>(
            (resolve, reject) => {
              setTimeout(() => {
                if (email) {
                  resolve({
                    data: 'Password reset confirmation code was sent',
                    status: 200,
                  });
                } else {
                  reject({
                    data: 'Email is not registered',
                    status: 500,
                  });
                }
              }, 1000);
            },
          );

          if (response.status === 200) {
            callback?.();
          }
        } catch (error) {
          console.error(error);
        }
      },
      confirmRestore: async (code: string, callback?: () => void) => {
        try {
          const response = await new Promise<{ data: string; status: number }>(
            (resolve, reject) => {
              setTimeout(() => {
                if (code === '111111') {
                  resolve({
                    data: 'Success',
                    status: 200,
                  });
                } else {
                  reject({
                    data: 'Incorrect code',
                    status: 500,
                  });
                }
              }, 1000);
            },
          );

          if (response.status === 200) {
            callback?.();
          }
        } catch (error) {
          console.error(error);
        }
      },
      changePassword: async (password: string, callback?: () => void) => {
        try {
          const response = await new Promise<{ data: string; status: number }>(
            (resolve, reject) => {
              setTimeout(() => {
                if (password) {
                  resolve({
                    data: 'password changed',
                    status: 200,
                  });
                } else {
                  reject({
                    data: 'error while change password',
                    status: 500,
                  });
                }
              }, 1000);
            },
          );

          if (response.status === 200) {
            callback?.();
          }
        } catch (error) {
          console.error(error);
        }
      },
      logout: async () => {
        set({ token: null });
      },
    }),
    {
      name: 'auth',
    },
  ),
);
