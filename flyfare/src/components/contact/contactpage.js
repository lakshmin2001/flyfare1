// src/components/Contact/ContactPage.js
import React from 'react';
import './contactpage.css'; // Import your CSS file
import Footer1 from '../Footer/Footer1';
import { FaInstagram } from "react-icons/fa"; 
import { MdMarkEmailUnread } from "react-icons/md";
import BackButton from '../contact/backbutton'; // Import the BackButton component

const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-header">
          <BackButton /> {/* Use the BackButton component */}
          <h2>CONTACT US</h2>
        </div>

        <div className="contact-information">
          <h3>CONTACT INFORMATION</h3>
          <p>
            We do not offer refunds for any payments made for our services, including
            but not limited to subscription fees, credits, or promotional offers.
            Once a payment is made, it is non-refundable.
          </p><br />
          <div className="contact-details">
            <div className="contact-method">
              <i className="fab fa-email"><MdMarkEmailUnread /> </i>
              <p>
                You can email us at <a href="mailto:support@onelifehealth.care">support@onelifehealth.care</a> for any inquiries or assistance you may need. Our support team will respond to your email as soon as possible.
              </p><br />
            </div>
            <div className="contact-method">
              <i className="fab fa-instagram"><FaInstagram /> </i>
              <p>
                You can also reach out to us on Instagram <a href="https://www.instagram.com/onelifehealth_care">@onelifehealth_care</a> by sending us a direct message. Our Instagram page is monitored regularly, and we will do our best to assist you promptly.
              </p><br />
            </div>
          </div>
        </div>

        <div className="hours-of-operation">
          <div className='space1'>
            <h3>HOURS OF OPERATION</h3>
            <p>
              Our support team is available to assist you during the following hours:
            </p>
            <p>Monday to Friday: 9:00 AM to 6:00 PM (GMT+5:30)</p>
            <p>Closed on weekends and public holidays</p>

            <h3>Response Time</h3>
            <p>
              We strive to respond to all inquiries and messages within 24-48 hours during our hours of operation. However, please note that response times may vary depending on the volume of inquiries received.
            </p>

            <h3>Please Note:</h3>
            <p>
              For urgent matters or technical issues, please include "URGENT" in the subject line of your email or message.
            </p><br />     

            <p>
              When contacting us, please provide as much detail as possible about the issue you are experiencing or the assistance you require. This will help us understand your needs and provide a more effective response. Thank you for choosing One Life HealthCare for your mental health support and community needs. We are here to assist you every step of the way.
            </p>  
          </div>
        </div>
      </div>

      <div className="footer12">
        <Footer1 />
      </div>
    </>
  );
};

export default ContactPage;
