import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Beaker, Target, Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Research = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Research Vision
            </h1>
            <p className="text-2xl md:text-3xl text-teal-400 mb-4">
              Building the Evidence Base for Safer Psychiatric Care
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              NeuriSight is committed to rigorous, evidence-based innovation. We are developing a wearable monitoring platform designed to undergo comprehensive feasibility research, clinical validation, and real-world pilot testing before widespread adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Research Roadmap */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research Roadmap</h2>
            <p className="text-xl text-gray-300">Our planned research program will evaluate:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-teal-500 transition">
              <Beaker className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Technical Feasibility</h3>
              <p className="text-gray-300">
                Continuous wearable physiological monitoring in acute psychiatric settings
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-teal-500 transition">
              <Users className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Clinical Workflow Integration</h3>
              <p className="text-gray-300">
                Integration with frontline nursing staff and routine documentation systems
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-teal-500 transition">
              <Target className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Prediction Methodology</h3>
              <p className="text-gray-300">
                Short-horizon escalation risk assessment and early warning systems
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-teal-500 transition">
              <CheckCircle className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Usability & Acceptability</h3>
              <p className="text-gray-300">
                Participatory design with psychiatric nurses and care staff
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-teal-500 transition">
              <Shield className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Ethical Frameworks</h3>
              <p className="text-gray-300">
                Patient autonomy, privacy, and trauma-informed monitoring practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding & Partnership Strategy */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Funding & Partnership Strategy
          </h2>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">NeuriSight is actively pursuing:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Federal Research Funding</h4>
                  <p className="text-gray-300">NIH services research mechanisms and SBIR programs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Academic Medical Centers</h4>
                  <p className="text-gray-300">Pilot site collaborations and clinical expertise partnerships</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Clinical Advisory Relationships</h4>
                  <p className="text-gray-300">Psychiatric nurses and behavioral health experts</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Foundation & Private Funding</h4>
                  <p className="text-gray-300">Support for early-stage development and validation</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            We are building relationships with inpatient psychiatric units, behavioral health systems, and research institutions to co-develop evidence-based monitoring solutions grounded in real-world nursing workflows.
          </p>
        </div>
      </section>

      {/* Current Development Stage */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Current Development Stage
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Phase: Pre-Clinical Research (2026)
              </h3>
              <p className="text-gray-300">
                Platform design, clinical advisory input, and research proposal development
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Next Milestone
              </h3>
              <p className="text-gray-300">
                Secure feasibility pilot funding and establish partner site agreements
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Future Vision
              </h3>
              <p className="text-gray-300">
                Multi-site clinical validation → FDA regulatory pathway → Scalable implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Advisory Board */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Clinical Advisory Board
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our platform development is informed by experienced psychiatric care professionals who provide:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Real-World Workflow Insights</h3>
              <p className="text-gray-300">
                From acute inpatient units and frontline care delivery
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Clinical Guidance</h3>
              <p className="text-gray-300">
                Escalation patterns, documentation practices, and care protocols
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Interface Design Feedback</h3>
              <p className="text-gray-300">
                Nurse-facing interface design and usability optimization
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Ethical Considerations</h3>
              <p className="text-gray-300">
                Patient-centered monitoring and trauma-informed approaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate With Us */}
      <section className="py-16 bg-gradient-to-br from-teal-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Collaborate With Us
          </h2>
          <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            We are seeking partners who share our commitment to evidence-based psychiatric safety innovation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-teal-500/30">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-200">
                  Inpatient psychiatric units interested in future pilot research participation
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-teal-500/30">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-200">
                  Academic researchers studying psychiatric safety, violence prevention, or health technology
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-teal-500/30">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-200">
                  Funding agencies supporting mental health services research and innovation
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 border border-teal-500/30">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-200">
                  Clinical advisors with expertise in psychiatric nursing, behavioral health, or restrictive practices reduction
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/#contact" 
              className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition font-semibold text-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Commitment to Rigorous Science */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Commitment to Rigorous Science
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            When NeuriSight enters clinical research, all studies will be conducted with:
          </p>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    IRB Approval & Human Subjects Protection
                  </h3>
                  <p className="text-gray-300">
                    Institutional Review Board oversight and comprehensive ethical review
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    HIPAA-Compliant Data Privacy
                  </h3>
                  <p className="text-gray-300">
                    Comprehensive security protocols and patient data protection
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    NIH Research Ethics Standards
                  </h3>
                  <p className="text-gray-300">
                    Adherence to data transparency and research integrity guidelines
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Trauma-Informed Design Principles
                  </h3>
                  <p className="text-gray-300">
                    Patient-centered approaches that prioritize dignity and autonomy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-300 text-center mt-12 italic">
            We are building a foundation for research that advances psychiatric safety science through rigorous, ethical, and collaborative innovation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;