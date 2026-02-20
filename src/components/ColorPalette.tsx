import { motion } from "framer-motion";

interface ColorPaletteProps {
  colors: { name: string; hex: string }[];
}

const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {colors.map((color, i) => (
          <motion.div
            key={color.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300 }}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className="w-10 h-10 rounded-lg border border-border shadow-lg"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-[10px] text-muted-foreground font-body">{color.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
