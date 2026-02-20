import { motion } from "framer-motion";
import { ReactNode } from "react";

interface OutfitCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const OutfitCard = ({ title, children, className = "", delay = 0 }: OutfitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`glass-card-hover p-5 flex flex-col gap-3 ${className}`}
    >
      <h3 className="font-display text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex-1">{children}</div>
    </motion.div>
  );
};

export default OutfitCard;
