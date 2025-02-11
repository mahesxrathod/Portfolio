import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-[#23486A] px-4 mt-[70px]">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl w-full">
        <h2 className="text-4xl font-extrabold mb-2 text-gray-900">
          Love to hear from you,
        </h2>
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 flex items-center">
          Get in touch <span className="ml-2">👋</span>
        </h2>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your name</label>
              <input
                type="text"
                placeholder="name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your email</label>
              <input
                type="email"
                placeholder="itaxexample@gmail.com"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="write your message here."
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black h-32 text-lg"
              spellCheck="true"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl text-xl font-semibold hover:bg-gray-800 transition"
          >
            Just Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
