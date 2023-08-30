import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'User List',
  description: 'Evelan test task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
