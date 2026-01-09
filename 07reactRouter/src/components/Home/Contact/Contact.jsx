import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to work together?
          Fill out the form below and I’ll get back to you.
        </p>

        {/* Form */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
