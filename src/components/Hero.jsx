import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef(null);
  const [stats, setStats] = useState({
    creators: 0,
    revenue: 0,
    rating: 0
  });

  const animateStats = () => {
    if (statsAnimated) return;
    
    setStatsAnimated(true);
    
    // Animate creators count
    let creatorsCurrent = 0;
    const creatorsTarget = 50000;
    const creatorsIncrement = creatorsTarget / 50;
    
    const creatorsTimer = setInterval(() => {
      creatorsCurrent += creatorsIncrement;
      if (creatorsCurrent >= creatorsTarget) {
        creatorsCurrent = creatorsTarget;
        clearInterval(creatorsTimer);
      }
      setStats(prev => ({ ...prev, creators: Math.floor(creatorsCurrent) }));
    }, 30);

    // Animate revenue
    let revenueCurrent = 0;
    const revenueTarget = 12;
    const revenueIncrement = revenueTarget / 50;
    
    const revenueTimer = setInterval(() => {
      revenueCurrent += revenueIncrement;
      if (revenueCurrent >= revenueTarget) {
        revenueCurrent = revenueTarget;
        clearInterval(revenueTimer);
      }
      setStats(prev => ({ ...prev, revenue: revenueCurrent }));
    }, 30);

    // Animate rating
    let ratingCurrent = 0;
    const ratingTarget = 4.9;
    const ratingIncrement = ratingTarget / 50;
    
    const ratingTimer = setInterval(() => {
      ratingCurrent += ratingIncrement;
      if (ratingCurrent >= ratingTarget) {
        ratingCurrent = ratingTarget;
        clearInterval(ratingTimer);
      }
      setStats(prev => ({ ...prev, rating: ratingCurrent }));
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsAnimated) {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

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
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Turn Your Knowledge Into{' '}
            <span className="highlight">Profitable Online Courses</span>
          </h1>
          <p className="hero-subtitle">
            CourseCreator360 is the complete platform that takes you from idea to income. 
            Create, market, and sell your online courses with zero technical headaches.
          </p>
          <div className="hero-stats" ref={statsRef}>
            <div className="stat">
              <span className="stat-number">{stats.creators.toLocaleString()}+</span>
              <span className="stat-label">Course Creators</span>
            </div>
            <div className="stat">
              <span className="stat-number">${stats.revenue.toFixed(0)}M+</span>
              <span className="stat-label">Revenue Generated</span>
            </div>
            <div className="stat">
              <span className="stat-number">{stats.rating.toFixed(1)}/5</span>
              <span className="stat-label">User Rating</span>
            </div>
          </div>
          <div className="hero-cta">
            <a 
              href="https://coursecreator360.com?ref=affiliate" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleAffiliateClick('https://coursecreator360.com?ref=affiliate')}
            >
              Start Your Course Empire Today
              <i className="fas fa-arrow-right"></i>
            </a>
            <p className="hero-guarantee">
              <i className="fas fa-shield-alt"></i>
              30-day money-back guarantee
            </p>
          </div>
        </div>
        <div className="hero-image">
          <div className="mockup">
            <div className="mockup-screen">
              <div className="mockup-content">
                <div className="course-preview">
                  <div className="course-header"></div>
                  <div className="course-video"></div>
                  <div className="course-lessons">
                    <div className="lesson"></div>
                    <div className="lesson"></div>
                    <div className="lesson"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;