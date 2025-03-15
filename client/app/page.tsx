import React from 'react';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import AboutSection from './AboutUs/AboutUs';
import PastEventsSection from './PastEvents/PastEvents';
import ContactUsSection from './ContactUs/ContactUs';
import OurTeam from './OurTeam/OurTeam';

export default function Home() {
  return (
    <main className="pt-safe">
      <section id="home" className="min-h-screen">
        <WelcomeSection />
      </section>
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>
      <section id="team" className="min-h-screen">
        <OurTeam />
      </section>
      <section id="past-events" className="min-h-screen">
        <PastEventsSection />
      </section>
      
      <section id="contact" className="min-h-screen">
        <ContactUsSection />
      </section>

    </main>
  );
}
