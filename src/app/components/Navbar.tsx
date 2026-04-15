import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
          ZENO
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-indigo-600 transition-colors">Features</Link>
          <Link href="#hotels" className="hover:text-indigo-600 transition-colors">Hotels</Link>
          <Link href="#contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            Log in
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
