// import { Button } from '../../src/utility/Button';
import { useState } from 'react';
function ContactPage() {
  const initial = { name: '', email: '', message: '' };
  const [formValue, setFormValue] = useState(initial);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <section className="contact__page">
        <div className="content">
          <h5>LET&apos;S TALK</h5>
          <h2>Hello! We&apos;ve been waiting for you.</h2>
          <p>
            Fill in the form or <span>Send us an email</span>
          </p>
        </div>
        <form name="contact" onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              required
              type="text"
              name="name"
              onChange={handleChange}
              value={formValue.name}
            />
            <label>What&apos;s your Name?</label>
          </div>
          <div className="inputs">
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={formValue.email}
            />
            <label>Your Email </label>
          </div>
          <div className="inputs">
            <input
              required
              type="text-area"
              name="message"
              onChange={handleChange}
              value={formValue.message}
            />
            <label htmlFor="">Tell use about your project...</label>
          </div>
          <div>
            <button type="submit" value="submit">
              Send Email
            </button>
          </div>
        </form>
        <div className="contact__container"></div>
      </section>
    </>
  );
}

export default ContactPage;
