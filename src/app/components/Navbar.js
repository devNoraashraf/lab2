
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Nora</h1>
      <div>
        <Link href="/users" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About Us</Link>
        <Link href="/contact" className="mr-4">Contact Us</Link>
        <Link href="/login">Login</Link>
 
      </div>
    </nav>
  );
};

export default Navbar;
