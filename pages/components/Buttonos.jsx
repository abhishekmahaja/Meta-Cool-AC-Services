import { Button as HeadlessButton } from "@headlessui/react";
import { clsx } from "clsx";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const styles = {
  base: [
    "relative inline-flex items-center justify-center gap-x-2 rounded-lg border text-base font-semibold",
    "px-6 py-2 sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-3 lg:text-base",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005f5a]",
    "transition-all duration-200",
  ],
  solid: [
    "border-transparent bg-white text-[#005f5a]",
    "hover:bg-[#005f5a] hover:text-white",
    "shadow-md hover:shadow-lg",
    "dark:bg-[#005f5a] dark:text-white",
  ],
  outline: [
    "border-[#005f5a] text-[#005f5a] bg-transparent",
    "hover:bg-[#005f5a] hover:text-white",
  ],
};

export const Button = React.forwardRef(function Button(
  { color = "solid", className, children, ...props },
  ref
) {
  const classes = clsx(
    styles.base,
    color === "solid" ? styles.solid : styles.outline,
    className
  );

  const motionProps = {
    whileHover: { scale: 1.05, rotate: 0.5 },
    whileTap: { scale: 0.95, rotate: -0.5 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  if ("href" in props) {
    return (
      <motion.div {...motionProps}>
        <Link {...props} className={classes} ref={ref}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps}>
      <HeadlessButton {...props} className={classes} ref={ref}>
        {children}
      </HeadlessButton>
    </motion.div>
  );
});
