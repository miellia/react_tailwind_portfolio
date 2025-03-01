import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State for submission status
  const [status, setStatus] = useState({ type: "", message: "" });
  // State to track loading status
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Encode form data for submission
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activate loading state

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Oops! Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to submit. Check your internet connection.",
      });
    } finally {
      setLoading(false); // Deactivate loading state after submission
    }
  };

  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-4xl font-bold text-purple-500">
        Let's Work Together
      </h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-blue-200">
        Ready to bring your ideas to life with compelling copy? Reach out and
        let’s create something impactful together!
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="mt-6 max-w-lg mx-auto"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-blue-900 text-white border border-purple-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-blue-900 text-white border border-purple-500"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-blue-900 text-white border border-purple-500"
          required
        ></textarea>

        {/* Submit button with loading state */}
        <button
          type="submit"
          className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold text-lg hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Sending..." : "Send Message"}{" "}
          {/* Show 'Sending...' during submission */}
        </button>
      </form>

      {/* Success or Error Message */}
      {status.message && (
        <div
          className={`mt-4 p-3 max-w-lg mx-auto text-lg rounded-lg ${
            status.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 text-2xl hover:text-purple-600 transition"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mielliadev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 text-2xl hover:text-purple-600 transition"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/mielliahttps://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 text-2xl hover:text-purple-600 transition"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
