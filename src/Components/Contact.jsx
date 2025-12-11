import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";
import { Link } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mrbnoegk");

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0a0a0a] text-white relative py-8 px-4 sm:px-6 md:px-20 lg:px-32 mt-26"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-green-400/10 blur-[200px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <span className="px-4 py-1 text-sm border border-white/20 rounded-full inline-flex items-center gap-2 mb-4">
          <span className="text-cyan-300"><Link size={16} /></span>
          <span className="text-gray-200">Get in Touch</span>
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
          Let’s{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-green-300 to-purple-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Have a project in mind or just want to say hi? I’d love to hear from you!
        </p>
      </div>

      {/* Content Grid */}
      <div className="relative z-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-4">

          {/* PHONE CARD */}
          <div className="bg-[#111111] border border-white/5 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-400/10 text-green-400 flex items-center justify-center rounded-md">
                <FaPhone size={14} />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-400">Phone No.</p>
                <p className="text-sm font-medium">+977 9766479723</p>
              </div>
            </div>
          </div>


          {/* EMAIL CARD */}
          <div className="bg-[#111111] border border-white/5 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-400/10 text-green-400 flex items-center justify-center rounded-md">
                <FaEnvelope size={14} />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-400">Email</p>
                <p className="text-sm font-medium">puskarmagar0215@gmail.com</p>
              </div>
            </div>
          </div>

          {/* LOCATION CARD */}
          <div className="bg-[#111111] border border-white/5 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-400/10 text-green-400 flex items-center justify-center rounded-md">
                <FaMapMarkerAlt size={14} />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-400">Location</p>
                <p className="text-sm font-medium">Nepal</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-white/5 p-4 sm:p-6 rounded-lg text-gray-400 text-sm sm:text-base">
            I'm always excited to connect with fellow developers, collaborate on interesting projects, or discuss new opportunities. Don't hesitate to reach out!
          </div>
        </div>

        {/* RIGHT SIDE — FORM or Thank-you */}
        {state.succeeded ? (
          <div
            className="p-6 sm:p-8 bg-[#111111] border border-white/5 rounded-lg text-center"
            role="status"
            aria-live="polite"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">Thanks!</h3>
            <p className="text-gray-400 text-sm sm:text-base">Thanks for your message — I’ll get back to you soon.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                name="name"
                type="text"
                className="w-full mt-2 bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-white/20 transition"
                placeholder="Your name"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                name="email"
                type="email"
                className="w-full mt-2 bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-white/20 transition"
                placeholder="your@email.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full mt-2 bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-white/20 transition"
                placeholder="Tell me about your project..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-2 w-full bg-green-400 text-black py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
