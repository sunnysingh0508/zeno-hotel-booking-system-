import { StarIcon, MapPinIcon } from '@heroicons/react/20/solid';

const hotels = [
  {
    id: 1,
    name: 'The Ritz-Carlton',
    location: 'Paris, France',
    price: 850,
    rating: 4.9,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Aman Tokyo',
    location: 'Tokyo, Japan',
    price: 1200,
    rating: 5.0,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1551882547-ff40eb0d1b73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Four Seasons Resort',
    location: 'Bali, Indonesia',
    price: 450,
    rating: 4.8,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Burj Al Arab',
    location: 'Dubai, UAE',
    price: 1500,
    rating: 4.9,
    reviews: 3200,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Hotels() {
  return (
    <section id="hotels" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
              Featured Destinations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our most popular handpicked hotels around the world.
            </p>
          </div>
          <button className="hidden sm:block text-indigo-600 font-medium hover:text-indigo-700">
            View all hotels &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{hotel.name}</h3>
                  <div className="flex items-center gap-1 bg-indigo-50 px-2 py-1 rounded-md">
                    <StarIcon className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-semibold text-indigo-600">{hotel.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                  <div>
                    <span className="text-xl font-extrabold text-gray-900">${hotel.price}</span>
                    <span className="text-sm text-gray-500"> / night</span>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
