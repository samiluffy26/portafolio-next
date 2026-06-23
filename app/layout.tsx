// app/layout.tsx
import '../styles/globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Samuel Portfolio',
  description: 'Professional landing page with animations, projects, and contact.',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}