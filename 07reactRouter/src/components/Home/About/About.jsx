import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          About Me
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <p className="text-gray-400 text-lg mb-4">
              I am a passionate web developer who loves building modern,
              responsive, and user-friendly web applications.
            </p>

            <p className="text-gray-400 text-lg mb-6">
              My main focus is creating projects using
              <span className="text-blue-400 font-medium"> React </span>
              and
              <span className="text-blue-400 font-medium"> Tailwind CSS</span>.
            </p>

            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
              Read More
            </button>
          </div>

          {/* Skills */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Skills
            </h3>

            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>HTML</span>
                <span className="text-blue-400">90%</span>
              </li>
              <li className="flex justify-between">
                <span>CSS</span>
                <span className="text-blue-400">85%</span>
              </li>
              <li className="flex justify-between">
                <span>JavaScript</span>
                <span className="text-blue-400">80%</span>
              </li>
              <li className="flex justify-between">
                <span>React</span>
                <span className="text-blue-400">75%</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
