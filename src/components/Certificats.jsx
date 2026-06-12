import { useState } from "react";
import certificate from "../assets/certificatDocker.png";

export default function Certificats() {
  const [certificats] = useState([
    {
      id: 1,
      title: "Getting Started with Docker",
      issuer: "SkillUp by Simplilearn",
      date: "2026",
      image: certificate,
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAzMzA5NTdfOTc3OTgyNV8xNzgxMDg1NzA3ODc1LnBuZyIsInVzZXJuYW1lIjoiTGFobWFyIFpha2FyaWFlIn0%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4231%2FGetting-Started-with-Docker%2F%28certificate%2Fdownload-skillup%2F%2Fcertificate%3Acertificate-locked-new%29&%24web_only=true",
    },
    
  ]);

  return (
    <section
      id="certificats"
      className="py-16 bg-gray-950 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-2">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My{" "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>

          <div className="mt-4 w-16 h-1 bg-linear-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </div>


        {/* Certificates */}
        <div className="grid md:grid-cols-3 gap-8">

          {certificats.map((cert) => (
            <div
              key={cert.id}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="h-52 overflow-hidden bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>


              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {cert.issuer}
                </p>

                <p className="text-purple-400 text-sm mb-5">
                  {cert.date}
                </p>


                <a
                  href={cert.link}
                  target="_blank"
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition"
                >
                  View Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}