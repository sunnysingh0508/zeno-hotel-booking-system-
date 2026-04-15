import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
            ZENO
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Smart hotel booking made simple. Discover, compare, and book the world's best hotels instantly.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} ZENO Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
