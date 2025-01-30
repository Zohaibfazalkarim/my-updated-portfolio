import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "I design beautiful and functional websites that bring ideas to life.",
            1000,
            "I build modern, efficient web solutions. ",
            1000,
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      {/* <img src="/man.png" alt="" /> */}
    </motion.div>
  );
};

export default Speech;
