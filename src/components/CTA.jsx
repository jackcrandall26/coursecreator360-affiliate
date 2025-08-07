import React from 'react';

const CTA = () => {
  const handleAffiliateClick = (href) => {
    // Track affiliate link clicks
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'affiliate',
        event_label: href,
        value: 1
      });
    }
    console.log('Affiliate link clicked:', href);
  };

  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Build Your Course Empire?</h2>
          <p>Join thousands of successful course creators who've chosen CourseCreator360</p>
          <a 
            href="https://coursecreator360.com?ref=affiliate" 
            className="btn btn-primary btn-large" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => handleAffiliateClick('https://coursecreator360.com?ref=affiliate')}
          >
            Start Your Free Trial Now
            <i className="fas fa-arrow-right"></i>
          </a>
          <div className="cta-features">
            <span><i className="fas fa-check"></i> 14-day free trial</span>
            <span><i className="fas fa-check"></i> No credit card required</span>
            <span><i className="fas fa-check"></i> Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;