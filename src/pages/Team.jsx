import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Victory Nlemadim",
      role: "Founder & Principal Investigator",
      image: "/Victory_Profile_1.png",
      bio: "Founder of NeuriSight and Principal Investigator leading the scientific vision and research design. Victory’s work focuses on nurse-centered predictive analytics, ethical AI, and sensor-informed measurement approaches for inpatient psychiatric care.",
      linkedin: "https://www.linkedin.com/in/victory-nlemadim-1276203a7/",
      email: "info@neurisight.io",
    },
    {
      name: "Eric Roldan",
      role: "Co-Founder & Lead Systems Engineer",
      image: "Eric_Profile_150.png",
      bio: "Co-founder and Lead Systems Engineer at NeuriSight, responsible for system architecture, data pipelines, and platform engineering. Eric brings deep experience in building scalable, security-conscious software systems across healthcare and applied AI.",
      linkedin: "https://www.linkedin.com/in/eric-roldan-700a04225/",
      email: "info@neurisight.io",
    },
    {
      name: "Chidinma Nosiri",
      role: "Clinical Advisor",
      image: "Chidinma_Profile_1.png",
      bio: "Clinical Advisor to NeuriSight with expertise in psychiatric nursing and inpatient clinical operations. Chidinma advises on workflow integration, feasibility, and nurse-centered design to ensure the platform aligns with real-world psychiatric care settings.",
      linkedin: "https://www.linkedin.com/in/chidinma-nosiri-81b9b1332/",
      email: "info@neurisight.io",
    },

    // Add more team members here
  ];

return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Meet the passionate experts behind NeuriSight, dedicated to
            transforming behavioral healthcare.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition border border-gray-700"
              >
                {/* Image container */}
                <div className="aspect-square bg-gray-700 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-teal-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-teal-400 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-teal-400 transition"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
