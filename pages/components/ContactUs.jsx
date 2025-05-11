"use client";

import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Address Info */}
          <motion.div
            className="space-y-8 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
                Office Address
              </h3>
              <p className="text-gray-600">
                Meta Cool
                <br />
                Air Conditioning Repair Shop
                <br />
                Shop No. 111, Sai Garden Road, Siddarth Apartment, Shahberi
                <br />
                Ghaziabad, Uttar Pradesh, India - 201009
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                Contact
              </h3>
              <p className="text-gray-600">Phone: +91-7453947573</p>
              <p className="text-gray-600">Email: support@metaac.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <ClockIcon className="w-6 h-6 text-blue-600" />
                Working Hours
              </h3>
              <p className="text-gray-600">All Days: 10:00 AM - 8:00 PM</p>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            className="w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.178523387335!2d77.4331636!3d28.6303501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe2b0c63353%3A0xdd84d3bed671e1db!2sMeta%20ac%20repair!5e0!3m2!1sen!2sin!4v1715155423925!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
