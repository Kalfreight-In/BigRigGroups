import React, { useState } from "react";
import emailjs from "emailjs-com";
import landingPage from "../../assets/Images/landingPage.jpg";
import "./nopay.css"; // Import the CSS file

export const Nopayment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [business, setBusiness] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_t6296ff";
    const templateID = "template_mhx3g3h";
    const Key = "-dyAfc-p3AqujoCxl";

    try {
      // Send the email with the form data
      await emailjs.sendForm(serviceID, templateID, e.target, Key);
      alert("Thank You. Our Sales Executive Will Reach Out Shortly !");
    } catch (error) {
      alert("Error sending the email. Please try again later.");
      console.error(error);
    }

    // Reset the form fields
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setBusiness("");
  };

  return (
    <div
      className="container"
      style={{
        background: `url(${landingPage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", // Add this line to cover the background
      }}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>
            {" "}
            <b>LEAVE US YOUR CONTACT DETAILS</b>
          </h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Select Location</option>
            <option value="Abbotsford">Abbotsford</option>
            <option value="Brampton">Brampton</option>
            <option value="Calgary">Calgary</option>
            <option value="Edmonton">Edmonton</option>
          </select>
          <textarea
            id="business"
            name="business"
            placeholder="Business Name (If Any)"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
          <div className="text-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nopayment;
