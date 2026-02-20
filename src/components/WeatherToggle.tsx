import { Sun, CloudRain, Cloud, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

interface WeatherToggleProps {
  weather: string;
  onWeatherChange: (weather: string) => void;
}

const options = [
  { value: "sunny", icon: Sun, label: "Sunny" },
  { value: "cloudy", icon: Cloud, label: "Cloudy" },
  { value: "rainy", icon: CloudRain, label: "Rainy" },
  { value: "cold", icon: Snowflake, label: "Cold" },
];

const WeatherToggle = ({ weather, onWeatherChange }: WeatherToggleProps) => {
  return (
    <div className="flex gap-2">
      {options.map((opt) => {
        const isActive = weather === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onWeatherChange(opt.value)}
            className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors font-body text-xs
              ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            {isActive && (
              <motion.div
                layoutId="weather-bg"
                className="absolute inset-0 rounded-lg bg-secondary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <opt.icon className="relative z-10 w-5 h-5" />
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default WeatherToggle;
