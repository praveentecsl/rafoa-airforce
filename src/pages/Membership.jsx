import { useState } from 'react';

const Membership = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    full_name: '',
    rank_retirement: '',
    service_no: '',
    branch: '',
    permanent_address: '',
    email: '',
    official_address: '',
    phone: '',
    current_occupation: '',
    
    // Dates & Service
    date_enlistment: '',
    date_retirement: '',
    total_service_years: '',
    total_service_months: '',
    commissioned_service_years: '',
    commissioned_service_months: '',
    
    // Identification
    national_id: '',
    passport_no: '',
    
    // Membership
    membership_type: 'life',
    
    // Files
    bank_slip: null,
    retired_service_id: null,
    applicant_photo: null,
    e_signature: null,
    
    // Agreement
    certify: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Rank options
  const ranks = [
    'Air Chief Marshal',
    'Air Marshal',
    'Air Vice Marshal',
    'Air Commodore',
    'Group Captain',
    'Wing Commander',
    'Squadron Leader',
    'Flight Lieutenant',
    'Flying Officer',
    'Pilot Officer'
  ];

  // Branch options
  const branches = [
    'General Duties (Pilot)',
    'General Duties (Naval)',
    'Engineering',
    'Logistics',
    'Administration',
    'Signals',
    'Medical',
    'Legal',
    'Accounts',
    'Special Duties'
  ];

  // Membership types
  const membershipTypes = [
    { value: 'life', label: 'Life Membership (Total Fees - Rs. 5,000/=)', fee: '5000' },
    { value: 'annual', label: 'Annual Membership (Rs. 500/= per year)', fee: '500' },
    { value: 'patron', label: 'Patron Membership (Rs. 25,000/=)', fee: '25000' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (errorMessage) setErrorMessage('');
  };

  const calculateTotalService = () => {
    if (formData.date_enlistment && formData.date_retirement) {
      const enlistment = new Date(formData.date_enlistment);
      const retirement = new Date(formData.date_retirement);
      const diffTime = Math.abs(retirement - enlistment);
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      return { years: diffYears, months: diffMonths };
    }
    return { years: 0, months: 0 };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Validation
    if (!formData.full_name || !formData.rank_retirement || !formData.email || !formData.national_id) {
      setErrorMessage('Please fill in all required fields (*)');
      setIsSubmitting(false);
      return;
    }

    if (!formData.certify) {
      setErrorMessage('Please certify that the information is correct');
      setIsSubmitting(false);
      return;
    }

    if (!formData.applicant_photo) {
      setErrorMessage('Please upload your photograph');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData for file uploads
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && key !== 'certify') {
          submitData.append(key, formData[key]);
        }
      });
      submitData.append('certify', formData.certify);

      // Simulate API call - Replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormSubmitted(true);
      // Reset form
      setFormData({
        full_name: '',
        rank_retirement: '',
        service_no: '',
        branch: '',
        permanent_address: '',
        email: '',
        official_address: '',
        phone: '',
        current_occupation: '',
        date_enlistment: '',
        date_retirement: '',
        total_service_years: '',
        total_service_months: '',
        commissioned_service_years: '',
        commissioned_service_months: '',
        national_id: '',
        passport_no: '',
        membership_type: 'life',
        bank_slip: null,
        retired_service_id: null,
        applicant_photo: null,
        e_signature: null,
        certify: false
      });
      
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      setErrorMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalService = calculateTotalService();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-sm text-blue-100 mb-2">
            <a href="/" className="text-blue-200 hover:text-white transition">Home</a> / Membership Application
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Membership Application</h1>
          <p className="text-blue-100 mt-2">As per Section 3 of the Constitution</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Success Message */}
          {formSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-green-700 font-semibold">
                ✓ Your application has been submitted successfully! The RAFOA committee will review and contact you.
              </p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md overflow-hidden">
            
            {/* Personal Information Section */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h2 className="text-xl font-bold text-blue-900">Personal Information</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="As per service records"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Rank at Retirement <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="rank_retirement"
                    value={formData.rank_retirement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select Rank</option>
                    {ranks.map(rank => (
                      <option key={rank} value={rank}>{rank}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service No
                  </label>
                  <input
                    type="text"
                    name="service_no"
                    value={formData.service_no}
                    onChange={handleChange}
                    placeholder="SLAF 1234"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Branch
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  >
                    <option value="">Select Branch</option>
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Permanent Address
                </label>
                <textarea
                  name="permanent_address"
                  value={formData.permanent_address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Current residential address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-mail Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telephone No
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 XX XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Official Address
                </label>
                <textarea
                  name="official_address"
                  value={formData.official_address}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Official/work address if applicable"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Current Occupation
                </label>
                <input
                  type="text"
                  name="current_occupation"
                  value={formData.current_occupation}
                  onChange={handleChange}
                  placeholder="e.g., Private Sector, Self-employed, Retired"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* Service Details Section */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h2 className="text-xl font-bold text-blue-900">Service Details</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Date of Enlistment
                  </label>
                  <input
                    type="date"
                    name="date_enlistment"
                    value={formData.date_enlistment}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Date of Retirement
                  </label>
                  <input
                    type="date"
                    name="date_retirement"
                    value={formData.date_retirement}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              {formData.date_enlistment && formData.date_retirement && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">
                    Total Service: {totalService.years} years {totalService.months} months
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Total Service (YY/MM)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="total_service_years"
                      placeholder="Years"
                      value={formData.total_service_years}
                      onChange={handleChange}
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="number"
                      name="total_service_months"
                      placeholder="Months"
                      value={formData.total_service_months}
                      onChange={handleChange}
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Commissioned Service (YY/MM)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="commissioned_service_years"
                      placeholder="Years"
                      value={formData.commissioned_service_years}
                      onChange={handleChange}
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="number"
                      name="commissioned_service_months"
                      placeholder="Months"
                      value={formData.commissioned_service_months}
                      onChange={handleChange}
                      className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Identification Section */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h2 className="text-xl font-bold text-blue-900">Identification</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    National ID No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="national_id"
                    value={formData.national_id}
                    onChange={handleChange}
                    placeholder="NIC or Passport should be filled"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Passport No
                  </label>
                  <input
                    type="text"
                    name="passport_no"
                    value={formData.passport_no}
                    onChange={handleChange}
                    placeholder="(Only for Foreign passport holders)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                  />
                  <p className="text-xs text-gray-500 mt-1">NIC or Passport should be filled</p>
                </div>
              </div>
            </div>

            {/* Documents Upload Section */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h2 className="text-xl font-bold text-blue-900">Supporting Documents</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Applicant Photo <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="applicant_photo"
                  onChange={handleChange}
                  accept="image/*"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Membership Type
                </label>
                <select
                  name="membership_type"
                  value={formData.membership_type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                >
                  {membershipTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Bank Deposit Slip / Existing RAFOA ID
                </label>
                <input
                  type="file"
                  name="bank_slip"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
                />
                <p className="text-xs text-gray-500 mt-1">Upload bank deposit slip (for Life Membership) or existing RAFOA ID</p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Retired Service ID
                </label>
                <input
                  type="file"
                  name="retired_service_id"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  E-Signature
                </label>
                <input
                  type="file"
                  name="e_signature"
                  onChange={handleChange}
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
                />
              </div>
            </div>

            {/* Declaration Section */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h2 className="text-xl font-bold text-blue-900">Declaration</h2>
            </div>
            <div className="p-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="certify"
                  checked={formData.certify}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-blue-900 focus:ring-blue-900"
                />
                <span className="text-gray-700">
                  I certify that the aforesaid details are correct. Further, I hereby undertake to return the membership card at any time I am instructed to do so by the SLAF.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold transition ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-800 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Membership;