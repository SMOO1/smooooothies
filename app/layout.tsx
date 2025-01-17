// app/layout.tsx
import '../app/globals.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Smooooothies',
  description: 'A website about smoothies',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Smooooothies</title>
        <meta name="description" content="A website about smoothies" />
      </head>
      <body>
        <header className="bg-white shadow-md py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-6xl font-bold text-green-800">smooooothies.</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-green-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Smooooothies. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
