import About from '../components/About.jsx';
import AppointmentForm from '../components/AppointmentForm.jsx';
import Contact from '../components/Contact.jsx';
import Doctors from '../components/Doctors.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import Services from '../components/Services.jsx';
import Testimonials from '../components/Testimonials.jsx';

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <AppointmentForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
