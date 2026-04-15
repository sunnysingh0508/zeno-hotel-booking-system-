import LoginForm from "../components/LoginForm";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex text-slate-900">
      {/* Left side panel (hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 relative bg-indigo-900 overflow-hidden">
        {/* Background gradient and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 z-0" />
        
        <div className="relative z-10 p-12 flex flex-col justify-between h-full">
          <Link href="/" className="text-3xl font-bold text-white tracking-tight">
            ZENO
          </Link>
          
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-white mb-6">
              Smart Hotel Booking Made Simple.
            </h1>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Join thousands of travelers who use ZENO to find and book the perfect stay. Experience seamless booking with our smart platform.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-white font-medium mb-3">
                "ZENO changed the way I travel. The platform is incredibly intuitive, and I always find the best hotel deals effortlessly."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Sarah Jenkins</p>
                  <p className="text-indigo-200 text-xs">Frequent Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-8 bg-slate-50 lg:bg-white relative">
        {/* Mobile branding */}
        <div className="absolute top-8 left-6 lg:hidden">
          <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
            ZENO
          </Link>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
}
