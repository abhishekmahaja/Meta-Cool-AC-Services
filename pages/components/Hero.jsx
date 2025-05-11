import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-12 md:pt-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col md:flex-row items-center gap-15">
          {/* Left Content (Text and Button) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:w-1/2 w-full"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert AC Repair &{" "}
              <span className="text-blue-600">Installation Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
              24/7 Emergency Service | Certified Technicians | 100% Satisfaction
              Guaranteed
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+917453947573" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold cursor-pointer"
            >
              Book Your Service
            </motion.a>
          </motion.div>

          {/* Right Content (Image) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="md:w-1/2 w-full"
          >
            <img
              src="/images/herotech.png"
              alt="AC Technician"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
