import React from 'react';
import './Footer.css';
import FooterImage from '../../assets/images/image3.png'






const Footer = () => {
  return (
    <footer99 className="footer99">

        <div className='footer98'>

        <div className="quote99">
        <h3>“Recovery is not one and done. It's a lifelong journey that takes place one day, one step at a time.”</h3>
        <p>- Steve Jobs, Mental Health & Adaptations.</p>
      </div>

      <div className="image-content9">
        <img src={FooterImage} alt="Mental Health Illustration" />
      </div>
        </div>
   


      <div className="message99">
        <p>
          Join us on this journey of resilience and renewal, as together, we weave a tapestry of support and compassion. At One Life Healthcare, your well-being is not just our priority; it's our collective mission.
        </p>
      </div>

  
    </footer99>
  );
};

export default Footer;
