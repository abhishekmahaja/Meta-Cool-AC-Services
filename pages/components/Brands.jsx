import { motion } from "framer-motion";

const brands = [
  { name: "Daikin", logo: "/images/brand/daikin.png" },
  { name: "LG", logo: "/images/brand/lg.png" },
  { name: "Samsung", logo: "/images/brand/samsung.png" },
  { name: "Voltas", logo: "/images/brand/voltas.png" },
  { name: "Hitachi", logo: "/images/brand/hitachi.png" },
  { name: "Blue Star", logo: "/images/brand/bluestar.avif" },
  { name: "Whirlpool", logo: "/images/brand/Whirlpool.avif" },
  { name: "Godrej", logo: "/images/brand/godrej.avif" },
  { name: "Panasonic", logo: "/images/brand/panasonic.png" },
  { name: "Croma", logo: "/images/brand/croma.png" },
];

const Brands = () => {
  return (
    <section id="brands" className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 text-gray-900"
        >
          Trusted Brands We Service
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 sm:h-20 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
