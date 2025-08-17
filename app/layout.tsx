import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainLayout } from '@/components/layout/MainLayout';
import { AuthProvider } from '@/features/auth/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OrientMada - Plateforme d\'Orientation Académique et Professionnelle',
  description: 'Découvrez votre voie professionnelle avec des tests d\'orientation personnalisés et une base de connaissances complète sur les métiers et formations à Madagascar.',
  keywords: 'orientation, métiers, formations, Madagascar, étudiants, tests, RIASEC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
        </AuthProvider>
      </body>
    </html>
  );
}