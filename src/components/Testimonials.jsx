import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const testimonialCards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
    testimonialCards?.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "I went from $0 to $50K in course sales within 6 months using CourseCreator360. The platform made everything so simple!",
      author: "Sarah Chen",
      role: "Digital Marketing Expert",
      stat: "$50K Revenue"
    },
    {
      quote: "The built-in marketing tools are incredible. I've grown my email list from 100 to 15,000 subscribers while building my course.",
      author: "Mike Rodriguez",
      role: "Fitness Coach",
      stat: "15K Subscribers"
    },
    {
      quote: "Finally, a platform that handles everything. I can focus on creating great content instead of wrestling with technology.",
      author: "Jennifer Adams",
      role: "Business Consultant",
      stat: "98% Satisfaction"
    }
  ];

  return (
    <section className="testimonials" id="testimonials" ref={testimonialsRef}>
      <div className="container">
        <div className="section-header">
          <h2>Success Stories from Real Course Creators</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div>
                    <h4>{testimonial.author}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-stats">
                <span>{testimonial.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;