import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name:'pushpalatha a',
      message: 'great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred.',
    },
    {
        name:'jagadeeswar reddy singam',
      message: 'this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind"',
    },
    {
    name:"ranesh bhattacharya",
      message: 'i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that s really cool. thanks for all the awesomeness. keep inventing !!.',
    }
  ]);

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const incrementIndex = () => {
    setActiveTestimonialIndex(activeTestimonialIndex === testimonials.length - 1 ? 0 : activeTestimonialIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(incrementIndex, 3000);
    return () => clearInterval(interval);
  }, [activeTestimonialIndex]);

  return (
    <div className="testimonial-slider" style={{textAlign:"center"}}>
      <div className="testimonial">
        <div className="testimonial-details">
          <h3>{testimonials[activeTestimonialIndex].name}</h3>
          <p>{testimonials[activeTestimonialIndex].message}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
