import React from 'react';
import './about.css';
import Footer1 from '../Footer/Footer1';
import Footer from '../Footer/Footer';
import Header from '../../Header';

const About = () => {
  return (
    <>
    <Header />
    <section className="who-we-are">
   
      <div className='text-name'>
        <h2>WHO WE ARE ? WHAT WE DO ? WHY WE DO ?</h2>
      </div>

      <div className="content">
        <div className='left'>
          <div className="box1"> 
            <div className="box">
              <p>
                We harness the power of technology not just to connect, but to heal—to ensure that every interaction nurtures both mind and soul. We believe in the transformative magic of sharing, knowing that in each narrative lies the potential for healing and growth.
              </p>
            </div>
          </div>

          <div className="box2">
            <div className="box">
              <p>
                We harness the power of technology not just to connect, but to heal—to ensure that every interaction nurtures both mind and soul. We believe in the transformative magic of sharing, knowing that in each narrative lies the potential for healing and growth.
              </p>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className="box3">
            <div className="box">
              <p>
                In a world where mental well-being is often overlooked, especially in India where millions grapple with silent battles, we stand firm in our commitment to fostering positive change. Through our app and website, we've cultivated a diverse tapestry of voices, including survivors, therapists, psychologists, and everyday heroes. Here, conversations span a myriad of topics—from financial woes to familial dynamics—bolstered by the unifying thread of empathy and understanding.
              </p>
            </div>
            <div className="circle-dot"></div> {/* Add this element for the dot */}
          </div>
        </div>
      </div>

      <Footer />
      <Footer1 />
    </section>
    
    
    
    
    
    
    
    </>
    
  );
};

export default About;
