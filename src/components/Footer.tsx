import React from "react";

const Footer = () => {
    return (
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
                {/* <li>3723 Greenville Avenue STE 75502</li>
                <li>Dallas, TX 75206</li> */}
                <li>Texas, USA</li>
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
    )
}

export default Footer;