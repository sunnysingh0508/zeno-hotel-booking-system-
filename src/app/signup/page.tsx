import SignupForm from "../components/SignupForm";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const features = [
  "Instant bookings with no hidden fees",
  "Smart recommendations tailored for you",
  "Free cancellations on most rooms",
  "24/7 dedicated customer support"
];

export default function SignupPage() {
  return (
    <div className="min-h-screen flex text-slate-900">
      {/* Left side panel (hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 relative bg-indigo-900 overflow-hidden">
        {/* Background gradient and effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-900 to-purple-900 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 z-0" />
        
        <div className="relative z-10 p-12 flex flex-col justify-between h-full">
          <Link href="/" className="text-3xl font-bold text-white tracking-tight">
            ZENO
          </Link>
          
          <div className="max-w-lg mt-auto mb-auto">
            <h1 className="text-4xl font-bold text-white mb-6">
              Join ZENO and start booking smarter.
            </h1>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Create an account to unlock exclusive member deals, manage your bookings effortlessly, and discover personalized stay recommendations.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-indigo-400" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-indigo-300 text-sm">
            &copy; {new Date().getFullYear()} ZENO Inc.
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-8 relative overflow-hidden bg-slate-50 min-h-screen border-none">
        
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-300/40 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-teal-300/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />

        {/* Mobile branding */}
        <div className="absolute top-8 left-6 lg:hidden z-20">
          <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
            ZENO
          </Link>
        </div>
        
        <SignupForm />
      </div>
    </div>
  );
}
