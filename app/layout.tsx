// app/layout.tsx
import '../styles/globals.css';
import { Toaster } from 'sonner';

export const metadata = {
  title: 'Samuel Portfolio',
  description: 'Landing page profesional con animaciones, proyectos y contacto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}