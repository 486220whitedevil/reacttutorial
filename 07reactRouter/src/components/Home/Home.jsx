import React from "react";

function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Website
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-6">
          I build modern websites using React & Tailwind CSS
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            Get Started
          </button>

          <button className="px-6 py-3 border border-gray-500 hover:border-blue-400 rounded-lg transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Home;
