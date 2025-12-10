import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import {Link} from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="w-full min-h-screen bg-[#0a0a0a] text-white md:px-70 mt-15 py-5 relative">

            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[500px] h-[500px] bg-green-400/10 blur-[200px] rounded-full"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-16">
                <span className="px-4 py-1 text-sm border border-white/20 rounded-full inline-flex items-center gap-2 mb-4">
                    <span className="text-cyan-300"> <Link size={16} /></span>
                    <span className="text-gray-200">Gei in Touch</span>
                </span>


                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Let’s{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-green-300 to-purple-500 bg-clip-text text-transparent">
                        Connect
                    </span>
                </h2>

                <p className="text-gray-400 mt-4">
                    Have a project in mind or just want to say hi? I’d love to hear from you!
                </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 relative z-20">
        <div className="flex flex-col gap-4">
          {/* EMAIL CARD */}
          <div className="bg-[#111111] border border-white/5 p-3 md:p-4 rounded-lg">
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
          <div className="bg-[#111111] border border-white/5 p-3 md:p-4 rounded-lg">
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

          <div className="bg-[#111111] border border-white/5 p-4 md:p-6 rounded-lg text-gray-400">
            I'm always excited to connect with fellow developers, collaborate on interesting projects, or discuss new opportunities. Don't hesitate to reach out!
          </div>
        </div>

                {/* RIGHT SIDE — FORM */}
                <form className="flex flex-col gap-6">

                    {/* Name */}
                    <div>
                        <label className="text-sm text-gray-400">Name</label>
                        <input
                            type="text"
                            className="w-full mt-2 bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                            type="email"
                            className="w-full mt-2 bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm text-gray-400">Message</label>
                        <textarea
                            rows="5"
                            className="w-full mt-2 bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        className="mt-2 w-full bg-green-400 text-black py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                        type="submit"
                    >
                        Send Message
                        <FaPaperPlane />
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Contact;
