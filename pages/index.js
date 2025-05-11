import Head from "next/head";
import Hero from "./components/Hero";
import Navbar from "./components/layout/Navbar";
import Brands from "./components/Brands";
import Services from "./components/Services";
import ServiceForm from "./components/Form";
import Footer from "./components/layout/Footer";
import Testimonials from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import WhatsAppButton from "./components/layout/Whatsapp";
import AboutUs from "./components/AboutUs";
import GallerySection from "./components/Gallery";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>META AC REPAIR</title>
        <meta name="description" content="Company description" />
      </Head>

      <div className="w-full min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <div>
          <Navbar />
        </div>

        {/* Content starts after Navbar */}
        <div className="flex-grow">
          <Hero />
          <Brands />
          <AboutUs />
          <Services />
          <ServiceForm />
          <GallerySection />
          <ContactUs />
          <Testimonials />
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
