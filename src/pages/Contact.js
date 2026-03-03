
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
    
      <div className="contact-left">
        <h1>Let's build something amazing together</h1>
        <p>
          Feel free to reach out for collaborations, freelance work, or just a friendly hello!
        </p>

        <div className="info-box">
          <h4>Email</h4>
          <p>sirishaannapureddy2@gmail.com</p>
        </div>

        <div className="info-box">
          <h4>Phone</h4>
          <p>+91 9701646377</p>
        </div>

        <div className="info-box">
          <h4>Location</h4>
          <p>Hyderabad, India</p>
        </div>
      </div>


      <div className="contact-right">
        <form>
          <div className="row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." />
          </div>

          <button className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;