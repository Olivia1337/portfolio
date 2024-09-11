import React, { useState } from "react";
import "../pages/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server or display a message)
    console.log("Form submitted:", formData);
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact_container">
      <div className="contact_content">
        <h1>Contact</h1>
        <p>Oliviaeriksson.dev@gmail.com</p>
        <p>OR</p>
        <form onSubmit={handleSubmit} className="contact_form">
          <div className="form_part_section">
            <label htmlFor="name" className="formText">
              Name
            </label>
            <input
              className="form_input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_part_section">
            <label htmlFor="email" className="formText">
              Email
            </label>
            <input
              className="form_input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form_part_section">
            <label className="formText" htmlFor="message">
              Message
            </label>
            <textarea
              className="form_input_message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button className="form_button" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
