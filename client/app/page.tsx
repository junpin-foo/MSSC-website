import React from 'react';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import AboutSection from './AboutUs/AboutUs';
// import PastEventsSection from './past-events/page';
// import UpcomingEventsSection from './upcoming-events/page';
// import ContactSection from './contact/page';

export default function Home() {
  return (
    <main>
      <section id="home" className="min-h-screen">
        <WelcomeSection />
      </section>
      <section id="about" className="min-h-screen">
        <AboutSection />
      </section>
      {/* <section id="past-events" className="min-h-screen">
        <PastEventsSection />
      </section>
      <section id="upcoming-events" className="min-h-screen">
        <UpcomingEventsSection />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>  */}
    </main>
  );
}
