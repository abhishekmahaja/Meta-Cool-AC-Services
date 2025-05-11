import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      {/* Desktop version (lg and up) */}
      <section
        id="about"
        className="hidden lg:block relative h-185 overflow-hidden"
      >
        <img
          src="/images/tech3.jpg"
          alt="Meta Cool AC technician at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 flex items-center h-full"
        >
          <div className="p-8 sm:p-12 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight text-black">
              About <span className="text-blue-500">Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">
              Meta Cool Air Conditioning Repair Shop is located at Shop No. 111,
              Sai Garden Road, Siddarth Apartment, Shahberi, Ghaziabad, Uttar
              Pradesh, India - 201009. We specialize in all kinds of AC services
              including installation, gas charging, maintenance, and repairs for
              both window and split ACs.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              With over 5 years of hands-on experience, our expert technicians
              are dedicated to ensuring top-quality service with a focus on
              customer satisfaction. Whether you need an AC installation in Gaur
              City or an AC service in Greater Noida, we are just a call away.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              We also offer AC on rent and emergency support. If you're
              searching for "AC shop near me", "nearest AC repair shop", or "AC
              installation near me", you've found the right place. Your comfort
              is our mission, and customer satisfaction is our first priority.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-10 justify-center md:justify-start">
              {[
                "👨🏼‍🔧 5+ Years Experience",
                "💯 Customer First",
                "❄️ AC Install, Service & Gas Charging",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="text-base sm:text-lg px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/30 border border-blue-400 text-gray-700 font-medium backdrop-blur-md hover:bg-cyan-400/20 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tablet version (md to lg) */}
      <section className="hidden md:block lg:hidden bg-gray-200 py-12 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight text-black">
              About <span className="text-blue-500">Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">
              Meta Cool Air Conditioning Repair Shop is your trusted source for
              AC service in Greater Noida, Gaur City, and Amrapali Dream Valley.
              Based in Shahberi, Ghaziabad, we provide complete solutions for AC
              installation, repair, service, and rental.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              With 5 years of consistent service excellence, we pride ourselves
              on timely support and transparent pricing. Whether you're looking
              for the nearest AC shop or want to rent an AC, we deliver quality
              with care.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              From gas refills to full installations, our team is trained to
              handle all AC issues professionally. Discover why customers rate
              us the best for "AC service in Amrapali Dream Valley" and "AC
              repair in Gaur City".
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-10">
              {[
                "🛠 AC Repairs & Rentals",
                "📍 Gaur City | Greater Noida",
                "🚀 Fast & Reliable Service",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="text-sm sm:text-base px-4 py-2 rounded-full bg-white/10 border border-blue-400 text-gray-500 backdrop-blur-md hover:bg-cyan-400/10 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              src="/images/tech2.png"
              alt="Meta Cool AC service"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Mobile version (sm and below) */}
      <section className="block md:hidden bg-gray-200 py-12 px-6 sm:px-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight text-black">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            Welcome to Meta Cool Air Conditioning Repair Shop in Shahberi,
            Ghaziabad. We provide AC installation, servicing, gas refilling, and
            more. Our services are trusted in Gaur City, Greater Noida, and
            Amrapali Dream Valley.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Our technicians are well-trained and experienced. We’ve been
            delivering trusted service for over 5 years, ensuring quality and
            reliability. We're among the top searches for "AC installation near
            me", "AC on rent", and "nearest AC repair shop".
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            Customer satisfaction is our top priority. Whether you're looking
            for AC repair in Gaur City or an AC shop near you, we’ve got you
            covered.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-10">
            {[
              "🏆 Trusted in Greater Noida",
              "📦 AC On Rent",
              "📍 Shahberi, Ghaziabad",
            ].map((item, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-base px-4 py-2 rounded-full bg-white/10 border border-blue-400 text-gray-500 backdrop-blur-md hover:bg-cyan-400/10 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <img
            src="/images/tech5.png"
            alt="Meta Cool technician working"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
      </section>
    </>
  );
};

export default AboutUs;
