// app/layout.tsx
import '../styles/globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Samuel Portfolio',
  description: 'Professional landing page with animations, projects, and contact.',
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