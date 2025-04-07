import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { AuthProvider } from '@/providers/AuthProvider';
import '@/styles/globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Beautiful Form',
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AuthProvider>
          <div className="w-full h-full">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
