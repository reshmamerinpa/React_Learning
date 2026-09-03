import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      alert("Message sent successfully! (EmailJS integration is next.)");

      setLoading(false);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 bg-gray-100 dark:bg-[#071A2B] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Let's Connect"
          title="Get In Touch"
        />

        <div className="grid md:grid-cols-2 gap-16 mt-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold dark:text-white mb-6 text-gray-900">
              Let's Work Together
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-10">
              I'm always interested in discussing new opportunities,
              freelance work, or exciting frontend projects.
              Feel free to reach out!
            </p>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-500 text-3xl" />

                <div>
                  <h4 className="font-bold dark:text-white text-gray-900">
                    Location
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 ">
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-500 text-3xl " />

                <div>
                  <h4 className="font-bold dark:text-white text-gray-900">
                    Email
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    merinreshma14@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-cyan-500 text-3xl" />

                <div>
                  <h4 className="font-bold dark:text-white text-gray-900">
                    Phone
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-[#102a43] p-8 rounded-3xl shadow-lg text-gray-600"
            >

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white outline-none  focus:border-cyan-500 transition"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white outline-none focus:border-cyan-500 transition"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white outline-none focus:border-cyan-500 transition resize-none"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 disabled:opacity-60 transition duration-300 cursor-pointer">
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;