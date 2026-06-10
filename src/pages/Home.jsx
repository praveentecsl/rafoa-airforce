import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Veteran Fellowship',
      description: 'Connect with fellow retired officers and maintain lifelong bonds of camaraderie.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Premium Facilities',
      description: 'Access our exclusive clubhouse with modern amenities and recreational spaces.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Social Events',
      description: 'Regular gatherings, cultural programs, and activities for members and families.'
    },
  ];

  const eligibleOrganizations = [
    'Royal Ceylon Air Force',
    'Sri Lanka Air Force',
    'Royal Ceylon Air Force Volunteer Force',
    'Sri Lanka Air Force Volunteer Force',
    'Officers listed in the Sri Lanka Air Force List'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Retired Air Force Officers Association
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            Honoring Service • Building Community • Creating Legacy
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            A premier community dedicated to fostering lasting connections, providing exceptional facilities, 
            and celebrating the distinguished service of our retired air force officers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Join Our Community
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-10 shadow-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                Established under the esteemed patronage of the Commander of the Air Force, RAFOA serves as a 
                unifying platform for retired air force personnel. We are dedicated to preserving the spirit of 
                service, facilitating meaningful connections between retired and serving officers, and enriching 
                the lives of our members through diverse social programs and premium club amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Why Join RAFOA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Membership Eligibility</h2>
              <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10">
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                The association welcomes all officers who have honorably served in:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eligibleOrganizations.map((org, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{org}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-900">
                <p className="text-blue-900 text-sm">
                  <span className="font-bold">Note:</span> Eligibility extends to all retired officers duly recorded in the current Sri Lanka Air Force List.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" pattern="M0 0 L100 0 L100 100 L0 100 Z"></svg>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Reconnect?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join a vibrant community of distinguished officers and enjoy the benefits of continued fellowship.
          </p>
          <Link to="/membership" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg">
            Apply for Membership Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;