const testimonials = [
  {
    id: 1,
    body: "Booking through ZENO was incredibly easy. The interface is beautiful, and I found the perfect hotel for my business trip in minutes.",
    author: {
      name: 'Sarah Jenkins',
      handle: 'Marketing Director',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    body: "The smart recommendations suggested a resort I wouldn't have found otherwise. We had the most amazing family vacation thanks to ZENO.",
    author: {
      name: 'Michael Chen',
      handle: 'Software Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    body: "As a frequent traveler, I appreciate the seamless UI and how fast the app loads. It's my go-to platform for all hotel bookings now.",
    author: {
      name: 'Emily Davis',
      handle: 'Travel Blogger',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
            Loved by travelers worldwide
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-x-4 mb-6">
                <img className="h-12 w-12 rounded-full bg-gray-50 object-cover" src={testimonial.author.imageUrl} alt="" />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.author.handle}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">"{testimonial.body}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
