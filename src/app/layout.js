

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

// export const metadata = {
//   title: "My App - The Best App",
//   description: "This is a Next.js app with MongoDB and dynamic metadata.",
//   icons: {
//     icon: "/favicon.ico",
//   },
//   openGraph: {
//     title: "My App",
//     description: "This is a Next.js app with MongoDB and dynamic metadata.",
//     url: "/",
//     type: "website",
//   },
// };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
