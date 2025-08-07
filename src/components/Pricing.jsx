import React, { useEffect, useRef } from 'react';

const Pricing = () => {
  const pricingRef = useRef(null);

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

    const pricingCards = pricingRef.current?.querySelectorAll('.pricing-card');
    pricingCards?.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);

      // Add hover effects
      const handleMouseEnter = () => {
        if (!card.classList.contains('popular')) {
          card.style.transform = 'translateY(-8px) scale(1.02)';
        }
      };
      
      const handleMouseLeave = () => {
        if (!card.classList.contains('popular')) {
          card.style.transform = 'translateY(0) scale(1)';
        } else {
          card.style.transform = 'scale(1.05)';
        }
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => observer.disconnect();
  }, []);

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

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Create unlimited courses',
        'Up to 1,000 students',
        'Basic analytics',
        'Email support'
      ],
      link: 'https://coursecreator360.com?ref=affiliate&plan=starter',
      buttonText: 'Get Started',
      buttonClass: 'btn-outline',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: [
        'Everything in Starter',
        'Unlimited students',
        'Advanced marketing tools',
        'Affiliate program',
        'Priority support'
      ],
      link: 'https://coursecreator360.com?ref=affiliate&plan=professional',
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager'
      ],
      link: 'https://coursecreator360.com?ref=affiliate&plan=enterprise',
      buttonText: 'Contact Sales',
      buttonClass: 'btn-outline',
      popular: false
    }
  ];

  return (
    <section className="pricing" id="pricing" ref={pricingRef}>
      <div className="container">
        <div className="section-header">
          <h2>Choose Your Success Plan</h2>
          <p>Start free, scale as you grow</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={plan.link} 
                className={`btn ${plan.buttonClass}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleAffiliateClick(plan.link)}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;