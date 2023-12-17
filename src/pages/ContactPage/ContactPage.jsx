import React from "react";
import "./ContactPage.scss";

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    // For now, you can log the form data to the console
    const formData = new FormData(e.target);
    console.log("Form data:", Object.fromEntries(formData));
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <table className="contact-table">
          <tbody>
            <tr className="contact-item">
              <th className="contact-item__th">
                <label htmlFor="name" className="contact-item__label">
                  <p>Name</p>
                </label>
              </th>

              <td className="contact-item__td">
                <input
                  type="text"
                  name="name"
                  className="contact-item__input"
                />
              </td>
            </tr>

            <tr className="contact-item">
              <th className="contact-item__th">
                <label htmlFor="phone" className="contact-item__label">
                  <p>Phone number</p>
                </label>
              </th>

              <td className="contact-item__td">
                <input
                  type="text"
                  name="phone"
                  className="contact-item__input"
                />
              </td>
            </tr>

            <tr className="contact-item">
              <th className="contact-item__th">
                <label htmlFor="email" className="contact-item__label">
                  <p>Email address</p>
                </label>
              </th>

              <td className="contact-item__td">
                <input
                  type="text"
                  name="email"
                  className="contact-item__input"
                />
              </td>
            </tr>

            <tr className="contact-item">
              <th className="contact-item__th">
                <label htmlFor="details" className="contact-item__label">
                  <p>Inquiry details</p>
                </label>
              </th>

              <td className="contact-item__td">
                <textarea
                  name="details"
                  id="details"
                  cols="30"
                  rows="10"
                  className="contact-item__input"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
