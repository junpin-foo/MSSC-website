import React from 'react';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import AboutSection from './AboutUs/AboutUs';
import PastEventsSection from './PastEvents/PastEvents';
import ContactUsSection from './ContactUs/ContactUs';
import Dashboard from './Dashboard/Dashboard';

export default function Home() {
  return (
    <main className="pt-safe">
      <section id="home" className="min-h-screen">
        <WelcomeSection />
      </section>
      <section id="dashboard" className="min-h-screen">
        <Dashboard />
      </section> 
      <section id="past-events" className="min-h-screen">
        <PastEventsSection />
      </section>
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactUsSection />
      </section>

    </main>
  );
}
