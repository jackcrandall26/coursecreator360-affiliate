import React, { useEffect, useRef } from 'react';

const Problem = () => {
  const problemRef = useRef(null);

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

    const problemItems = problemRef.current?.querySelectorAll('.problem-item');
    problemItems?.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: 'fas fa-times-circle',
      title: 'Technical Overwhelm',
      description: 'Juggling multiple tools, plugins, and platforms just to get started'
    },
    {
      icon: 'fas fa-times-circle',
      title: 'Marketing Struggles',
      description: 'Great content but no one knows about your course'
    },
    {
      icon: 'fas fa-times-circle',
      title: 'Payment Headaches',
      description: 'Complex payment setups and transaction fees eating your profits'
    }
  ];

  return (
    <section className="problem" ref={problemRef}>
      <div className="container">
        <h2>Tired of Complicated Course Creation?</h2>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-item">
              <i className={problem.icon}></i>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;