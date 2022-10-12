import React from "react";
import { motion } from "framer-motion";

const ScaleTapComponent = ({ children }: { children: any }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
      {children}
    </motion.div>
  );
};

export default ScaleTapComponent;
