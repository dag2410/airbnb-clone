import { motion } from "framer-motion";

const AnimatedText = ({ text, className }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
