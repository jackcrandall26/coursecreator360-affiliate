import React from 'react';

const Footer = () => {
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

  const footerSections = [
    {
      title: 'CourseCreator360',
      type: 'description',
      content: 'Empowering educators and entrepreneurs to share their knowledge and build successful online course businesses.'
    },
    {
      title: 'Platform',
      type: 'links',
      links: [
        { text: 'Features', href: 'https://coursecreator360.com/features?ref=affiliate' },
        { text: 'Pricing', href: 'https://coursecreator360.com/pricing?ref=affiliate' },
        { text: 'Templates', href: 'https://coursecreator360.com/templates?ref=affiliate' }
      ]
    },
    {
      title: 'Support',
      type: 'links',
      links: [
        { text: 'Help Center', href: 'https://coursecreator360.com/help?ref=affiliate' },
        { text: 'Contact', href: 'https://coursecreator360.com/contact?ref=affiliate' },
        { text: 'Community', href: 'https://coursecreator360.com/community?ref=affiliate' }
      ]
    },
    {
      title: 'Legal',
      type: 'links',
      links: [
        { text: 'Privacy Policy', href: 'https://coursecreator360.com/privacy?ref=affiliate' },
        { text: 'Terms of Service', href: 'https://coursecreator360.com/terms?ref=affiliate' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              {section.type === 'description' ? (
                <>
                  <h3>{section.title}</h3>
                  <p>{section.content}</p>
                </>
              ) : (
                <>
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => handleAffiliateClick(link.href)}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CourseCreator360 Affiliate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;