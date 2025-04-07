import { FC } from 'react';
import { redirect } from 'next/navigation';

const Auth: FC = () => {
  return redirect('/auth/login');
};

export default Auth;
