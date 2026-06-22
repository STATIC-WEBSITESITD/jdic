import { useState } from 'react';
import { careersSection } from '../../data/home';
import CustomBtn from './CustomBtn';

const { title, titleAccent, subtitle } = careersSection;

export default function CareersForm() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const resumeInput = form.resume;
    if (!resumeInput?.files?.[0]) {
      alert('Please attach your resume (PDF, DOC, or DOCX).');
      return;
    }

    const formData = new FormData();
    formData.append('full_name', form.full_name.value);
    formData.append('email', form.email.value);
    formData.append('mobile', form.mobile.value);
    formData.append('designation', form.designation.value);
    formData.append('resume', resumeInput.files[0]);

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for applying! We will review your application and get back to you shortly.');
        form.reset();
        setFileName('');
      } else {
        alert(result.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
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
                <form id="careersForm" className="form" onSubmit={handleSubmit}>
                  <div className="row input__wrap controls">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="full_name" id="full_name" placeholder="Full Name" required data-error="Full name is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" id="career_email" placeholder="Email" required data-error="Valid email is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="tel" name="mobile" id="career_mobile" placeholder="Mobile Number" required data-error="Mobile number is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="designation" id="designation" placeholder="Designation" required data-error="Designation is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="careers-file-label" htmlFor="resume">
                          <i className="fas fa-paperclip mr-2" />
                          Resume: {fileName || 'No file chosen'}
                        </label>
                        <input
                          type="file"
                          name="resume"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          style={{ display: 'none' }}
                          onChange={handleFileChange}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <CustomBtn type="submit" label="Apply Now" />
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
