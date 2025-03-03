import React from 'react';
import './About.scss';

const About = () => {
  const historicalFacts = [
    {
      title: "Authentication Process",
      content: "Each item in our collection undergoes rigorous authentication by military historians and experts. We use period documentation, manufacturer markings, and material analysis to verify authenticity."
    },
    {
      title: "Preservation",
      content: "Our items are carefully preserved using museum-grade conservation techniques. We maintain original patinas and battle damage as these tell the authentic story of each artifact."
    },
    {
      title: "Historical Context",
      content: "Many of our items come from the Kharkov region, a significant area during World War II. Each piece provides a tangible connection to this pivotal period in history."
    },
    {
      title: "Collection Focus",
      content: "We specialize in German World War II military equipment, with a particular emphasis on combat-used items that show the real conditions of warfare."
    }
  ];

  const services = [
    {
      title: "Expert Consultation",
      content: "Professional advice on military collectibles authentication and valuation"
    },
    {
      title: "Collection Building",
      content: "Assistance in developing focused, historically significant collections"
    },
    {
      title: "Documentation",
      content: "Detailed historical documentation and provenance research for items"
    },
    {
      title: "Worldwide Shipping",
      content: "Secure, insured shipping with proper documentation for military antiques"
    }
  ];

  const contactInfo = {
    email: "info@ostenrelics.com",
    phone: "+1 (555) 123-4567",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    location: "Historical District, Boston, MA 02108",
    socialMedia: {
      facebook: "facebook.com/ostenrelics",
      instagram: "instagram.com/ostenrelics"
    }
  };

  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__title">About Osten Relics</h1>
        <p className="about__subtitle">Preserving History Through Authentic Military Artifacts</p>
      </div>

      <div className="about__content">
        <section className="about__section">
          <h2>Our Story</h2>
          <p>
            Founded by military history enthusiasts, Osten Relics specializes in authentic World War II
            military collectibles. Our focus is on preserving and sharing historically significant
            items that tell the stories of one of history's most impactful periods.
          </p>
          <p>
            Each item in our collection has been carefully authenticated and preserved, maintaining
            its historical integrity while ensuring its preservation for future generations. We take
            pride in offering not just artifacts, but pieces of history that connect us to the past.
          </p>
        </section>

        <section className="about__section">
          <h2>Historical Facts</h2>
          <div className="about__grid">
            {historicalFacts.map((fact, index) => (
              <div key={index} className="about__card">
                <h3>{fact.title}</h3>
                <p>{fact.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about__section">
          <h2>Our Services</h2>
          <div className="about__grid">
            {services.map((service, index) => (
              <div key={index} className="about__card">
                <h3>{service.title}</h3>
                <p>{service.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about__section about__contact">
          <h2>Contact Information</h2>
          <div className="about__contact-grid">
            <div className="about__contact-item">
              <h3>Email</h3>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="about__contact-item">
              <h3>Phone</h3>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
            <div className="about__contact-item">
              <h3>Business Hours</h3>
              <p>{contactInfo.hours}</p>
            </div>
            <div className="about__contact-item">
              <h3>Location</h3>
              <p>{contactInfo.location}</p>
            </div>
          </div>

          <div className="about__social">
            <h3>Follow Us</h3>
            <div className="about__social-links">
              <a href={`https://${contactInfo.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={`https://${contactInfo.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="about__section">
          <h2>Our Commitment</h2>
          <p>
            We are dedicated to the preservation and accurate representation of historical artifacts.
            Our team works tirelessly to ensure that each item we offer is authentic, well-documented,
            and properly preserved. We believe that these artifacts serve as important educational
            tools and tangible connections to historical events that should never be forgotten.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
