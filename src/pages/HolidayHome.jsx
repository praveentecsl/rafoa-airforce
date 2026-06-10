const HolidayHome = () => {
  const documents = [
    {
      title: "Holiday Home Application",
      file: "/documents/Holiday_Home_Application.pdf",
      icon: "📄"
    },
    {
      title: "Standard Operating Procedure (SOP)",
      file: "/documents/RAFOA_SOP.pdf",
      icon: "📋"
    }
  ];

  const features = [
    "Fully furnished holiday home",
    "Located at China Bay, Trincomalee",
    "Air-conditioned rooms",
    "Kitchen facilities available",
    "Close to beach and tourist attractions",
    "Secure parking available"
  ];

  const bookingInfo = {
    contact: "RAFOA Secretary",
    email: "rafoabooking@gmail.com",
    phone: "+94 11 234 5678",
    calendar: "https://calendar.google.com/calendar/embed?src=rafoabooking%40gmail.com&ctz=Asia%2FColombo"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Holiday Home Complex</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your Home Away from Home at China Bay, Trincomalee
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Main Image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/images/hh.jpg" 
              alt="RAFOA Holiday Home at China Bay" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1200x600?text=RAFOA+Holiday+Home";
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">About the Holiday Home</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RAFOA proudly offers a fully-furnished holiday home complex located in the scenic 
                  China Bay area of Trincomalee. This facility is exclusively available for RAFOA 
                  members and their families, providing a perfect getaway to relax and rejuvenate.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The holiday home is strategically located near pristine beaches and popular tourist 
                  attractions, making it an ideal destination for vacations, family gatherings, 
                  and reunions with fellow retired officers.
                </p>
              </div>

              {/* Features Grid */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Facilities & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Download */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Required Documents</h2>
                <p className="text-gray-600 mb-4">
                  Please download, fill, and submit the following documents for holiday home bookings:
                </p>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.file}
                      download
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{doc.icon}</span>
                        <span className="font-semibold text-gray-800">{doc.title}</span>
                      </div>
                      <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Info & Calendar */}
            <div className="space-y-8">
              {/* Booking Information Card */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl shadow-md p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">How to Book</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-200 text-sm">Contact</p>
                    <p className="font-semibold">{bookingInfo.contact}</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Email</p>
                    <a href={`mailto:${bookingInfo.email}`} className="font-semibold hover:underline">
                      {bookingInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Phone</p>
                    <p className="font-semibold">{bookingInfo.phone}</p>
                  </div>
                </div>
              </div>

              {/* Availability Calendar Link - Blinking effect as in original */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-red-200">
                <div className="animate-pulse">
                  <svg className="w-16 h-16 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-red-600 mb-2">Check Availability</h3>
                  <a
                    href={bookingInfo.calendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
                  >
                    View Booking Calendar →
                  </a>
                  <p className="text-sm text-gray-500 mt-3">
                    Click to check real-time availability and book your stay
                  </p>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-yellow-50 rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-800 mb-2">Important Notes</h3>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>✓ Advance booking is required</li>
                  <li>✓ Valid RAFOA membership required</li>
                  <li>✓ Security deposit may apply</li>
                  <li>✓ Check-in/out times apply as per SOP</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> China Bay, Trincomalee, Sri Lanka
                </p>
                <p className="text-gray-700">
                  The holiday home is conveniently located near:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                  <li>Uppuveli Beach - 10 minutes drive</li>
                  <li>Fort Frederick - 15 minutes drive</li>
                  <li>Koneswaram Temple - 20 minutes drive</li>
                  <li>Trincomalee Town - 15 minutes drive</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-500">Map view will be available here</p>
                {/* You can add Google Maps embed here later */}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Plan Your Stay Today</h2>
            <p className="text-blue-100 mb-4">
              Enjoy a relaxing holiday at our exclusive facility in beautiful Trincomalee
            </p>
            <a
              href={bookingInfo.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Check Availability Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HolidayHome;