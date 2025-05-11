"use client";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";

const media = [
  { type: "image", src: "/images/Shop/shop1.jpg", alt: "Shop Image 1" },
  { type: "video", src: "/images/Shop/shopvideo.mp4", alt: "Shop Tour Video" },
  { type: "image", src: "/images/Shop/shop2.jpg", alt: "Shop Image 2" },
  { type: "image", src: "/images/Shop/shop3.jpg", alt: "Shop Image 3" },
  { type: "image", src: "/images/Shop/shop4.jpg", alt: "Shop Image 4" },
  { type: "image", src: "/images/Shop/shop5.jpg", alt: "Shop Image 5" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);

  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelected(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="px-4 py-12 bg-gray-50 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Our Shop Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="relative cursor-pointer overflow-hidden rounded-xl group shadow-lg aspect-[3/4]"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={!!selected}
          onClose={() => setSelected(null)}
          className="fixed inset-0 z-50"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
            {selected && (
              <Dialog.Panel
                ref={modalRef}
                className="bg-transparent rounded-lg relative w-full max-w-[90vw] max-h-[90vh] flex justify-center items-center"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 bg-white text-black hover:text-red-500 text-4xl cursor-pointer hover:scale-110 transition-transform duration-300 h-12 w-12 flex items-center justify-center rounded-full"
                >
                  &times;
                </button>

                <div className="w-auto h-full aspect-[9/16]">
                  {selected.type === "image" ? (
                    <img
                      src={selected.src}
                      alt={selected.alt}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <video
                      src={selected.src}
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                </div>
              </Dialog.Panel>
            )}
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
