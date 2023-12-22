import React, { useEffect } from "react";
import "./ContactPage.scss";
import DuoTitle from "../../components/DuoTitle/DuoTitle";

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    // For now, you can log the form data to the console
    const formData = new FormData(e.target);
    console.log("Form data:", Object.fromEntries(formData));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact-header">
        <DuoTitle japTitle="問い合わせ" engTitle="Contact" />
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <table className="contact-table">
          <tbody>
            <tr className="contact-item">
              <th className="contact-item__th">
                <label htmlFor="name" className="contact-item__label">
                  Name
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
                  Phone number
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
                  Email address
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
                  Inquiry details
                </label>
              </th>

              <td className="contact-item__td">
                <textarea
                  name="details"
                  id="details"
                  cols="30"
                  rows="10"
                  className="contact-item__textarea"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="contact__btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
