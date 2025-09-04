import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const pageTransition = { duration: 0.5, ease: "easeInOut" };

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
