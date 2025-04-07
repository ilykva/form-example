import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Sign up page',
};

const Layout: FC<Props> = ({ children }) => {
  return children;
};

export default Layout;
