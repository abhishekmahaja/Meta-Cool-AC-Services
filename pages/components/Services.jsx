import { motion } from "framer-motion";

const services = [
  {
    title: "AC Installation",
    description: "Professional installation of all types of AC units",
    icon: "🛠️",
  },
  {
    title: "AC Repair",
    description: "Expert repair services for all AC brands and models",
    icon: "🔧",
  },
  {
    title: "AC Maintenance",
    description: "Regular maintenance services to keep your AC running smoothly",
    icon: "🧰",
  },
  {
    title: "Split AC Services",
    description:
      "Professional installation, repair, and maintenance for split AC units",
    icon: "❄️",
  },
  {
    title: "Window AC Services",
    description: "Expert window AC installation and repair services",
    icon: "🪟",
  },
  {
    title: "Central AC Systems",
    description: "Complete solutions for central air conditioning systems",
    icon: "🏢",
  },
  {
    title: "AC Gas Charging",
    description: "Professional gas charging and leak detection services",
    icon: "💨",
  },
  {
    title: "AC on Rent",
    description: "Affordable AC rental services for all your needs",
    icon: "💰",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-gray-900"
        >
          Our AC Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-blue-200 transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0"></div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl mb-3"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
