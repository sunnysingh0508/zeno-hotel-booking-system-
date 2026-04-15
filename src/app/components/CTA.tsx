import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600 -z-10" />
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-indigo-700 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 text-balance">
          Book your perfect stay today
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Experience seamless booking with ZENO. Join thousands of happy travelers and discover the world's best hotels at unbeatable prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-block text-center">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
