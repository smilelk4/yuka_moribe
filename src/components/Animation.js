import React from 'react';
import { motion } from "framer-motion";

const Animation = (props) => (
  <div>
    <motion.div animate={{ translateX: props.direction }}
    transition={{ duration: 2 }}
    >
      Hello
    </motion.div>
  </div>
);

export default Animation;