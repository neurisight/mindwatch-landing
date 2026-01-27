import {
  Activity,
  Users,
  BarChart3,
  Shield,
  UserCheck,
  Brain,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const NeuriSightLanding = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Predict and Prevent Patient Episodes Before They Happen
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                NeuriSight is developing a next-generation AI-powered wearable
                monitoring platform designed to integrate comprehensive
                physiological and behavioral data to empower clinicians with
                earlier, more evidence-based intervention
                opportunities—currently advancing through clinical advisory
                development, feasibility research and pilot validation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition font-medium">
                  Partner With Us
                </button>
                <button className="border-2 border-teal-600 text-teal-400 px-8 py-3 rounded-lg hover:bg-teal-900/30 transition font-medium">
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700">
                <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg p-8 text-white">
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
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            The Problem & Our Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Approach */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Current Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-300">
                    Majority of VB/DE occurs when staff first intervene
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-300">
                    Delays in intervention with limited direct supervision
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-300">Reactive measures and lack of agitation logs</span>
                </li>
              </ul>
              <div className="mt-6 bg-gray-800 rounded-lg p-4 border border-gray-600">
                <img
                  src="/oldApproach.png"
                  alt="Current approach to patient monitoring"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* NeuriSight Solution */}
            <div className="bg-teal-900/30 rounded-lg p-6 border border-teal-700">
              <h3 className="text-2xl font-bold mb-4 text-teal-300">
                NeuriSight Solution
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span className="text-gray-300">Continuous monitoring with real-time risk scores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span className="text-gray-300">
                    AI-detect patterns within initial signs of agitation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span className="text-gray-300">Early, data-driven de-escalation strategies</span>
                </li>
              </ul>
              <div className="mt-6 bg-gray-800 rounded-lg p-4 border border-gray-700">
                <img
                  src="/newApproach.png"
                  alt="NeuriSight approach to patient monitoring"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            How NeuriSight Works
          </h2>
          <p className="text-center text-gray-900 mb-12">
            Our three-step approach identifies patient agitation through
            biofeedback
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
              <div className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-teal-300">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Wearable Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Capture user behavior patterns (heart rate, skin conductance)
                via discrete wearables for early signal identification.
              </p>
              <div className="bg-gray-700 rounded-lg aspect-video flex items-center justify-center border border-gray-600">
                <Activity className="w-16 h-16 text-teal-400" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
              <div className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-teal-300">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AI Analysis</h3>
              <p className="text-gray-300 mb-4">
                AI events classify long-stream data through pre-built and
                adaptive machine learning analytics.
              </p>
              <div className="bg-gray-700 rounded-lg aspect-video flex items-center justify-center border border-gray-600">
                <Brain className="w-16 h-16 text-teal-400" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
              <div className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-teal-300">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Clinician Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Staff view the early warning scores, add real context to
                behavior data, and take action for prevention.
              </p>
              <div className="bg-gray-700 rounded-lg aspect-video flex items-center justify-center border border-gray-600">
                <BarChart3 className="w-16 h-16 text-teal-400" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-teal-900/20 border-l-4 border-teal-500 p-6 rounded">
            <p className="text-gray-800 italic">
              "NeuriSight is a clinical decision support tool that integrates
              comprehensive data to empower clinicians in making more timely and
              evidence-based decisions, ultimately advancing the standards of
              quality and safety in patient care."
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Benefits
          </h2>
          <p className="text-center text-gray-900 mb-12">
            Transform your healthcare with measurable outcomes
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <Activity className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Enhanced Observation Metric
              </h3>
              <p className="text-gray-300 mb-4">
                Target: Improved patient outcomes through early detection and
                early intervention for agitation triggers
              </p>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <BarChart3 className="w-full h-32 text-teal-400" />
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <Users className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Fewer Incidents</h3>
              <p className="text-gray-300 mb-4">
                Goal: reduction in workplace aggression and patient self-harm
                through prevention strategies. Pilot feasibility objectives;
                clinical validation in progress
              </p>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                <div className="w-full h-32 flex items-center justify-center">
                  <div className="text-4xl font-bold text-teal-400">↓ 45%</div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <BarChart3 className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Staff Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Goal: Enhanced staff safety, reduced burnout, and better
                resource management.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center border border-gray-600">
                <div className="w-32 h-32 rounded-full border-8 border-teal-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-400">
                    ↓ 80%
                  </span>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <Shield className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Reduced Liability</h3>
              <p className="text-gray-300 mb-4">
                Maintain the documentation to strengthen accountability and
                reduce liability risks.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <UserCheck className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                Improved Patient Outcomes
              </h3>
              <p className="text-gray-300 mb-4">
                Support better recovery outcomes through de-escalate proactive,
                data-driven care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section id="use-cases" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Initial Use Case Focus
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Starting with high-impact applications where we can make the biggest
            difference
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Agitation & Violence Risk Prediction
              </h3>
              <p className="text-gray-300 mb-4">
                We're piloting AI-powered tracking platforms to support staff in
                preventing violence and aggression in behavioral health
                settings.
              </p>
              <h4 className="text-xl font-bold mb-4 text-teal-300">
                Pilot Case Study:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span className="text-gray-300">AI-DI model detects outburst 15 min in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Monitored vital signs & psychomotor agitation via real-time
                    biosensing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Early detection window enabled trauma-aware care response
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <div className="bg-gradient-to-br from-teal-900 to-blue-900 rounded-lg aspect-video flex items-center justify-center">
                <Brain className="w-32 h-32 text-teal-400" />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <p className="text-gray-300 text-center">
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
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border border-teal-700">
                <Activity className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">HIPAA Compliant</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border border-teal-700">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">FDA Audit Framework</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border border-teal-700">
                <BarChart3 className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">Clinical Validation</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border border-teal-700">
                <Users className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">Data Security</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border border-teal-700">
                <UserCheck className="w-8 h-8 text-teal-400" />
              </div>
              <p className="text-sm font-medium text-gray-300">Proactive Personalized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NeuriSightLanding;