import React, { useState } from "react";
import {
  Menu,
  X,
  Activity,
  Users,
  BarChart3,
  Shield,
  UserCheck,
  Brain,
} from "lucide-react";
import Navigation from './components/Navigation'

const NeuriSightLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospital: "",
    specialty: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Predict and Prevent Patient Episodes Before They Happen
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Using real-time behavioral analysis to help healthcare teams
                intervene early, ensuring a safe, trauma-aware, and
                violence-free environment
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-medium">
                  Start Free Trial
                </button>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition font-medium">
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-6">
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg p-8 text-white">
                  <Brain className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    AI-Powered Monitoring
                  </h3>
                  <p className="text-teal-100">
                    Real-time behavioral analysis and early intervention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Problem & Our Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Approach */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Current Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    Majority of VB/DE occurs when staff first intervene
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>
                    Delays in intervention with limited direct supervision
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Reactive measures and lack of agitation logs</span>
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-lg p-4">
                <img
                  src="/oldApproach.png"
                  alt="Current approach to patient monitoring"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* NeuriSight Solution */}
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-teal-900">
                NeuriSight Solution
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    Continuous monitoring with real-time alert devices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>
                    AI-detect patterns within initial signs of agitation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Early, data-driven de-escalation strategies</span>
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-lg p-4">
                <img
                  src="/newApproach.png"
                  alt="Current approach to patient monitoring"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How NeuriSight Works
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Our three-step approach identifies patient agitation through
            biofeedback
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Wearable Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Capture user behavior patterns (heart rate, skin conductance)
                via discrete wearables for early signal identification.
              </p>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <Activity className="w-16 h-16 text-teal-600" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
              <p className="text-gray-600 mb-4">
                158 AI events classify long-stream data through pre-built and
                adaptive machine learning analytics.
              </p>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <Brain className="w-16 h-16 text-teal-600" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Clinician Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Staff view the early alerts, add real context to behavior data,
                and take action for prevention.
              </p>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-teal-600 p-6 rounded">
            <p className="text-gray-700 italic">
              "NeuriSight is a clinical decision support tool that integrates
              comprehensive data to empower clinicians in making more timely and
              evidence-based decisions, ultimately advancing the standards of
              quality and safety in patient care."
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Transform your healthcare with measurable outcomes
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <Activity className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Enhanced Observation Metric
              </h3>
              <p className="text-gray-600 mb-4">
                Improved patient outcomes through early detection and early
                intervention for agitation triggers.
              </p>
              <div className="bg-white rounded-lg p-4">
                <BarChart3 className="w-full h-32 text-teal-600" />
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <Users className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fewer Incidents</h3>
              <p className="text-gray-600 mb-4">
                Reduce workplace aggression and patient self-harm through
                prevention strategies.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="w-full h-32 flex items-center justify-center">
                  <div className="text-4xl font-bold text-teal-600">↓ 45%</div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <BarChart3 className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Staff Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Enhanced staff safety, reduced burnout, and better resource
                management.
              </p>
              <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-8 border-teal-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">85%</span>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <Shield className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Reduced Liability</h3>
              <p className="text-gray-600 mb-4">
                Maintain the documentation to strengthen accountability and
                reduce liability risks.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <UserCheck className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Improved Patient Outcomes
              </h3>
              <p className="text-gray-600 mb-4">
                Support better recovery outcomes through de-escalate proactive,
                data-driven care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section id="use-cases" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Initial Use Case Focus
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Starting with high-impact applications where we can make the biggest
            difference
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Agitation & Violence Risk Prediction
              </h3>
              <p className="text-gray-600 mb-4">
                We build AI-powered tracking platforms and support staff in
                preventing violence and aggression in behavioral health
                settings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>AI-DI model detected outburst 8 min in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>
                    Monitored vital signs & psychomotor agitation via real-time
                    biosensing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>
                    Trauma-aware care & de-escalation techniques prevented a
                    crisis
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg aspect-video flex items-center justify-center">
                <Brain className="w-32 h-32 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
            <p className="text-gray-700 text-center">
              A nurse and patient AI collaboration allows dozens of early
              intervention attempts and translates into cost management and
              safety.
            </p>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-medium">
              Learn About Our Research
            </button>
          </div>
        </div>
      </section>

      {/* Feature Icons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-sm font-medium">HIPAA Compliant</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-sm font-medium">FDA Audit Framework</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-sm font-medium">Clinical Validation</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-sm font-medium">Data Security</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <UserCheck className="w-8 h-8 text-teal-600" />
              </div>
              <p className="text-sm font-medium">Proactive Personalized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo1-trans.png" alt="NeuriSight Logo" className="w-8" />
                <span className="text-xl font-bold">NeuriSight</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming behavioral healthcare through AI-powered prediction
                and prevention.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Inpatient Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Violence Prevention
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Staff Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wearables
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>3723 Greenville Avenue STE 75502</li>
                <li>Dallas, TX 75206</li>
                <li className="pt-2">info@NeuriSight.io</li>
                {/* <li>1-800-NeuriSight</li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; 2025 NeuriSight. All rights reserved. | Privacy Policy |
              Terms of Service | HIPAA Compliance
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NeuriSightLanding;
