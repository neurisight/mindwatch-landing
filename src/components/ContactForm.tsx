import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospital: "",
    specialty: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill out all required fields: Name, Email, and Message.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      hospital: "",
      specialty: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Request a Demo
        </h2>
        <p className="text-center text-gray-600 mb-8">
          See NeuriSight in action and learn how it can transform your
          healthcare facility
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital/Facility
              </label>
              <input
                type="text"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                placeholder="Organization name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialty
              </label>
              <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                placeholder="e.g., Behavioral Health"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none"
              placeholder="Tell us about your needs..."
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 w-4 h-4" />
              <span className="text-sm text-gray-600">
                I agree to receive updates
              </span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-medium text-lg"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;