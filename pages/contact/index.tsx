import { Button } from '../../src/utility/Button';
function ContactPage() {
  return (
    <>
      <section className="contact__page">
        <div className="content">
          <h5>{`LET'S`} TALK</h5>
          <h2>Hello! {`We've`} been waiting for you.</h2>
          <p>
            Fill in the form or <span>Send us an email</span>
          </p>
        </div>
        <form name="contact">
          <div className="inputs">
            <input required type="text" name="name" />
            <label htmlFor="">{`What's`} your Name?</label>
          </div>
          <div className="inputs">
            <input required type="email" name="email" />
            <label htmlFor="">Your Email </label>
          </div>
          <div className="inputs">
            <input required type="text-area" name="message" />
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
