import { enquirySection } from '../../data/home';
import CustomBtn from './CustomBtn';

const { title, titleAccent, subtitle, buttonLabel = 'Send Message' } = enquirySection.contact;

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.currentTarget;
  
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
  
    const formData = {
      name: form.name.value,
      email: form.email.value,
      mobile: form.mobile.value,
      subject: form.subject.value,
      message: form.message.value,
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      console.log('API Response:', result);
  
      if (result.success) {
        alert('Form submitted successfully');
        form.reset();
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="light-v">
      <section className="contact-p pt-100 pb-100 cstm_form">
        <div className="container" data-aos="fade-up">
          <div className="cstm_title">
            <h4 className="text-center mb-30">
              {title} <span style={{ color: 'var(--primary)' }}>{titleAccent}</span>
            </h4>
            <p className="text-center mb-0">{subtitle}</p>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="form-box">
                <form id="contactForm" className="form" onSubmit={handleSubmit}>
                  <div className="row input__wrap controls">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Name" required data-error="Name is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Email" required data-error="Valid email is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" name="mobile" id="mobile" placeholder="Mobile Number" required data-error="Mobile number is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="subject" id="subject" placeholder="Subject" required data-error="Subject is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Message"
                          required
                          data-error="Please, leave us a message."
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <CustomBtn type="submit" label={buttonLabel} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
