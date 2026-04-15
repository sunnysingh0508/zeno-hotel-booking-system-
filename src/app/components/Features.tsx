import { BoltIcon, ShieldCheckIcon, CalendarDaysIcon, CheckBadgeIcon, SparklesIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Real-time Availability',
    description: 'See live updates on room availability and secure your booking instantly without waiting.',
    icon: BoltIcon,
  },
  {
    name: 'Secure Payments',
    description: 'Your transactions are protected with bank-level encryption and secure payment gateways.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Easy Cancellation',
    description: 'Plans change? No problem. Enjoy hassle-free cancellation and flexible booking options.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Verified Hotels',
    description: 'Every hotel on our platform is strictly verified to ensure top-notch quality and safety.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Smart Recommendations',
    description: 'Our AI suggests the best stays based on your preferences, budget, and travel history.',
    icon: SparklesIcon,
  },
  {
    name: '24/7 Support',
    description: 'Our dedicated customer service team is available around the clock to assist you.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            Everything you need for a perfect stay
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide a seamless and secure booking experience tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100/50">
              <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
