// TextAnimation.jsx
import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({
  text,
  direction = "left",
  lineAnime = false,
  letterAnime = false,
  as = "h1",
  classname = "",
  variants = null,
  speed = 0.5,
}) => {
  const Component = motion[as];

  // Default variants if not provided
  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -50 : direction === "up" ? 50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8 * speed,
        ease: "easeOut",
      },
    },
  };

  const finalVariants = variants || defaultVariants;

  if (lineAnime) {
    const lines = text.split(" ");
    return (
      <Component
        className={classname}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1 * speed,
            },
          },
        }}
      >
        {lines.map((line, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={finalVariants}
          >
            {line}
          </motion.span>
        ))}
      </Component>
    );
  }

  if (letterAnime) {
    return (
      <Component
        className={classname}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03 * speed,
            },
          },
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={finalVariants}
          >
            {char}
          </motion.span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      className={classname}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={finalVariants}
    >
      {text}
    </Component>
  );
};

export default TextAnimation;
