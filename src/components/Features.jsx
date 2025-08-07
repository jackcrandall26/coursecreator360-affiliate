import React, { useEffect, useRef } from 'react';

const Features = () => {
  const featuresRef = useRef(null);

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

    const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
    featureCards?.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);

      // Add hover effects
      const handleMouseEnter = () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      };
      
      const handleMouseLeave = () => {
        card.style.transform = 'translateY(0) scale(1)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'fas fa-video',
      title: 'Drag & Drop Course Builder',
      description: 'Create stunning courses with our intuitive editor. Add videos, quizzes, assignments, and more without any coding.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Built-in Marketing Tools',
      description: 'Email campaigns, sales funnels, and affiliate programs built right in. Market your course like a pro.'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Seamless Payments',
      description: 'Accept payments globally with our integrated payment system. No third-party fees or complicated setups.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Advanced Analytics',
      description: 'Track student progress, sales performance, and optimize your courses with detailed insights.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile-First Design',
      description: 'Your courses look perfect on any device. Students can learn anywhere, anytime.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Expert Support',
      description: 'Get help when you need it with our dedicated support team and extensive knowledge base.'
    }
  ];

  return (
    <section className="features" id="features" ref={featuresRef}>
      <div className="container">
        <div className="section-header">
          <h2>Everything You Need in One Platform</h2>
          <p>CourseCreator360 eliminates the complexity with an all-in-one solution</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;