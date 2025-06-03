import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (name && email && message) {
      alert(`Thank you for your message, ${name}!`);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            id="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
