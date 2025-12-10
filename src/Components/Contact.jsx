import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-[#0a0a0a] text-white px-6 md:px-24 py-24 relative">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-green-400/10 blur-[200px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <span className="px-4 py-1 text-sm border border-white/10 rounded-full">
          🔗 Get In Touch
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
      <div className="grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT SIDE — INFO CARDS */}
        <div className="flex flex-col gap-6">

          {/* EMAIL CARD */}
          <div className="bg-[#111111] border border-white/5 p-6 rounded-xl hover:border-white/15 transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-400/10 text-green-400 flex items-center justify-center rounded-lg">
                <FaEnvelope size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-medium">your@email.com</p>
              </div>
            </div>
          </div>

          {/* LOCATION CARD */}
          <div className="bg-[#111111] border border-white/5 p-6 rounded-xl hover:border-white/15 transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-400/10 text-green-400 flex items-center justify-center rounded-lg">
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg font-medium">Nepal</p>
              </div>
            </div>
          </div>

          {/* MESSAGE NOTE CARD */}
          <div className="bg-[#111111] border border-white/5 p-6 rounded-xl hover:border-white/15 transition">
            <p className="text-gray-400 leading-relaxed">
              I’m always excited to connect with fellow developers, collaborate on interesting projects,
              or discuss new opportunities. Don’t hesitate to reach out!
            </p>
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
