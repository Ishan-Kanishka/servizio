import React from 'react';

const Event = () => {
  const events = [
    {
      id: 1,
      name: 'Wedding',
      description: 'Create unforgettable memories with our bespoke wedding packages — from grand receptions to intimate ceremonies, with tailored South Indian cuisine.',
      image: 'https://picsum.photos/seed/wedding/400/300',
    },
    {
      id: 2,
      name: 'Corporate Event',
      description: 'Impress your team and clients with professional catering and a refined setup perfect for conferences, seminars, and product launches.',
      image: 'https://picsum.photos/seed/corporate/400/300',
    },
    {
      id: 3,
      name: 'Birthday Celebration',
      description: 'Celebrate your special day with vibrant themes, custom menus, and joyful vibes, perfect for all age groups.',
      image: 'https://picsum.photos/seed/birthday/400/300',
    },
  ];

  return (
    <section className="px-4 md:px-12 py-16 bg-gradient-to-br from-white via-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-md">
          🎉 Event Experiences
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map (event => (
            <div
              key={event.id}
              className="bg-white relative rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
