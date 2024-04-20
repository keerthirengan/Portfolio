import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold">My Portfolio</h1>
        <ul className="flex space-x-4 text-white">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
