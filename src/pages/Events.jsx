const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual General Meeting 2024",
      date: "December 15, 2024",
      time: "10:00 AM - 1:00 PM",
      venue: "RAFOA Club House, Colombo",
      description: "Join us for the annual general meeting where we discuss association matters and elect new committee members.",
      type: "Meeting",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Veterans Day Celebration",
      date: "December 20, 2024",
      time: "6:00 PM - 10:00 PM",
      venue: "Air Force Officers' Mess",
      description: "A special evening honoring our veterans with dinner, entertainment, and fellowship.",
      type: "Social",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Medical Camp for Retired Officers",
      date: "January 10, 2025",
      time: "9:00 AM - 4:00 PM",
      venue: "RAFOA Club House",
      description: "Free health check-ups and consultations with specialist doctors for members.",
      type: "Welfare",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Annual Cricket Tournament",
      date: "January 25-26, 2025",
      time: "8:00 AM - 6:00 PM",
      venue: "SLAF Cricket Grounds",
      description: "Inter-squadron cricket tournament for retired officers.",
      type: "Sports",
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Independence Day Celebration",
      date: "February 4, 2024",
      description: "Commemorated Independence Day with a special ceremony and lunch",
      type: "Social"
    },
    {
      id: 6,
      title: "Family Fun Day",
      date: "March 15, 2024",
      description: "A day of games, activities, and entertainment for members and families",
      type: "Family"
    },
    {
      id: 7,
      title: "Workshop on Financial Planning",
      date: "April 20, 2024",
      description: "Expert session on retirement financial management",
      type: "Educational"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      Meeting: "bg-purple-100 text-purple-700",
      Social: "bg-green-100 text-green-700",
      Welfare: "bg-red-100 text-red-700",
      Sports: "bg-orange-100 text-orange-700",
      Family: "bg-pink-100 text-pink-700",
      Educational: "bg-blue-100 text-blue-700"
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay connected through our diverse calendar of events and gatherings
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            <p className="text-gray-600 mt-4">Join us at these exciting upcoming gatherings</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-br from-blue-900 to-blue-700 p-6 text-white text-center">
                    <div className="text-3xl font-bold">{event.date.split(',')[0]}</div>
                    <div className="text-sm opacity-90 mt-1">{event.date.split(',')[1]?.trim()}</div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                      Register Interest
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Past Events</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            <p className="text-gray-600 mt-4">Relive memorable moments from our recent gatherings</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive notifications about upcoming events and activities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" />
              <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;