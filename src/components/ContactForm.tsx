import React, { useState } from "react";
import Toast from "./Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospital: "",
    specialty: "",
    message: "",
  });

  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email) {
      setToast({ message: "Please fill in all required fields.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setToast(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Safely parse JSON (but don't crash if server returns non-JSON)
      let data = null;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { error: text || "Unexpected server response." };
      }

      if (!res.ok) {
        // Prefer backend error message if provided
        const errMsg =
          data?.error ||
          data?.message ||
          `Request failed with status ${res.status}`;
        setToast({ message: errMsg, type: "error" });
        return;
      }

      // Success path
      const successMsg =
        data?.message || "Thank you for your interest! We'll be in touch soon.";
      setToast({ message: successMsg, type: "success" });

      // Reset form
      setFormData({
        name: "",
        email: "",
        hospital: "",
        specialty: "",
        message: "",
      });
    } catch (err) {
      setToast({
        message: err?.message || "Network error. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Partner With Us
          </h2>
          <p className="text-center text-gray-600 mb-8">
            See NeuriSight in action and learn how it can transform your healthcare
            facility
          </p>

          <div className="bg-gray-700 rounded-lg shadow-lg p-6 md:p-8">
            {/* Make it a real form so Enter submits */}
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder-gray-100"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder-gray-100"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Hospital/Facility
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder-gray-100"
                    placeholder="Organization name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-100 mb-2">
                    Specialty
                  </label>
                  <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder-gray-100"
                    placeholder="e.g., Behavioral Health"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-100 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none placeholder-gray-100"
                  placeholder="Tell us about your needs..."
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4"
                    disabled={isSubmitting}
                  />
                  <span className="text-sm text-gray-50">
                    I agree to receive updates
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white py-3 rounded-lg transition font-medium text-lg ${
                  isSubmitting
                    ? "bg-teal-400 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
