const About = () => {
  const committeeMembers = [
    {
      role: "President",
      name: "Air Chief Marshal (Retd)",
      honorific: "Deshamanya",
      period: "2023 - Present"
    },
    {
      role: "Vice President",
      name: "Air Marshal (Retd)",
      honorific: "",
      period: "2023 - Present"
    },
    {
      role: "Secretary",
      name: "Air Vice Marshal (Retd)",
      honorific: "",
      period: "2023 - Present"
    },
    {
      role: "Treasurer",
      name: "Air Commodore (Retd)",
      honorific: "",
      period: "2023 - Present"
    }
  ];

  const coreValues = [
    {
      title: "Service Before Self",
      description: "Upholding the highest traditions of military service and dedication to fellow veterans."
    },
    {
      title: "Unity & Camaraderie",
      description: "Building strong bonds of friendship and mutual support among retired officers."
    },
    {
      title: "Excellence",
      description: "Maintaining outstanding standards in all our programs and facilities."
    },
    {
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical conduct at all times."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RAFOA</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Honoring our past, celebrating our present, and building our future together
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Story</h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The Retired Air Force Officers Association (RAFOA) was founded under the esteemed patronage 
                of the Commander of the Air Force, creating a lasting legacy of fellowship and mutual support 
                among retired air force personnel. Since our establishment, we have grown into a vibrant 
                community that bridges the gap between retired and serving officers.
              </p>
              <p>
                Our association serves as a cornerstone for maintaining the rich traditions of the Sri Lanka 
                Air Force while adapting to the evolving needs of our retired community. We take pride in 
                offering a welcoming environment where lifelong friendships flourish and new connections are forged.
              </p>
              <p>
                Through our dedicated efforts, we've created a space where the spirit of service continues 
                to thrive, ensuring that every retired officer feels valued, connected, and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do at RAFOA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Committee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Leadership Committee</h2>
            <p className="text-center text-gray-600 mb-12">
              Dedicated officers committed to serving our veteran community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committeeMembers.map((member, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-md p-6 border-l-4 border-blue-900">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{member.role}</h3>
                  <p className="text-gray-700 font-semibold">
                    {member.honorific && `${member.honorific} `}{member.name}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">{member.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Association Structure */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Association Structure</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">General Membership</h3>
                    <p className="text-gray-600">All eligible retired officers who join the association</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Executive Committee</h3>
                    <p className="text-gray-600">Elected leadership managing association affairs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Advisory Board</h3>
                    <p className="text-gray-600">Senior officers providing strategic guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mt-1">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Activity Committees</h3>
                    <p className="text-gray-600">Specialized groups for events, welfare, and facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join a legacy of service and camaraderie that spans generations
          </p>
          <a href="/membership" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Become a Member Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;