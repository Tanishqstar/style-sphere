import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shirt, Footprints, Watch, Gem } from "lucide-react";
import OutfitCard from "./OutfitCard";
import ColorPalette from "./ColorPalette";
import StyleRadarChart from "./StyleRadarChart";
import WeatherToggle from "./WeatherToggle";
import HistoryFeed from "./HistoryFeed";
import heroImage from "@/assets/hero-fashion.jpg";

const mockOutfit = {
  rationale:
    "A refined ensemble balancing sophistication with understated cool. The navy tones anchor the look while camel accessories add warmth and texture contrast.",
  items: [
    { category: "Top", description: "Slim-fit navy merino wool sweater", icon: Shirt },
    { category: "Bottom", description: "Tailored charcoal wool trousers", icon: Shirt },
    { category: "Shoes", description: "Burnished tan leather derby shoes", icon: Footprints },
    { category: "Accessory", description: "Gold-tone minimal watch & leather belt", icon: Watch },
  ],
  colors: [
    { name: "Navy", hex: "#1B2A4A" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Camel", hex: "#C19A6B" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Gold", hex: "#D4A843" },
  ],
};

const occasions = ["Business Meeting", "Date Night", "Casual Friday", "Wedding Guest", "Weekend Brunch"];

const BentoDashboard = () => {
  const [weather, setWeather] = useState("sunny");
  const [occasion, setOccasion] = useState("Business Meeting");
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Checking local weather...",
    "Analyzing your style profile...",
    "Consulting the stylist...",
    "Curating your outfit...",
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setIsGenerating(false), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 900);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-end justify-between"
        >
          <div>
            <h1 className="text-3xl font-display font-semibold gold-text">
              Stylist Command Center
            </h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              AI-powered outfit curation, tailored to your moment.
            </p>
          </div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="gold-gradient text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            Generate Outfit
          </button>
        </motion.div>

        {/* Loading overlay */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card p-6 flex items-center gap-4"
            >
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-foreground font-body text-sm"
                  >
                    {loadingSteps[loadingStep]}
                  </motion.p>
                </AnimatePresence>
                <div className="flex gap-1 mt-2">
                  {loadingSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-8 rounded-full transition-colors duration-300 ${
                        i <= loadingStep ? "bg-primary" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Large Card - Hero Outfit */}
          <OutfitCard
            title="Today's Look"
            className="col-span-4 lg:col-span-2 row-span-2"
            delay={0.1}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
              <img
                src={heroImage}
                alt="Outfit inspiration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-body text-primary bg-secondary/80 px-2 py-1 rounded">
                  {occasion}
                </span>
              </div>
            </div>
            <p className="text-sm text-foreground font-body leading-relaxed">
              {mockOutfit.rationale}
            </p>
            <div className="mt-4 space-y-2">
              {mockOutfit.items.map((item, i) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-lg bg-secondary/40"
                >
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground font-body">{item.category}</span>
                    <p className="text-sm text-foreground font-body">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </OutfitCard>

          {/* Color Palette */}
          <OutfitCard title="Color Palette" className="col-span-2 lg:col-span-1" delay={0.2}>
            <ColorPalette colors={mockOutfit.colors} />
          </OutfitCard>

          {/* Weather & Occasion */}
          <OutfitCard title="Context" className="col-span-2 lg:col-span-1" delay={0.25}>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground font-body mb-2 block">Weather</label>
                <WeatherToggle weather={weather} onWeatherChange={setWeather} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-body mb-2 block">Occasion</label>
                <div className="flex flex-wrap gap-1.5">
                  {occasions.map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setOccasion(occ)}
                      className={`px-3 py-1 rounded-full text-xs font-body transition-colors ${
                        occasion === occ
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </OutfitCard>

          {/* Style Profile Radar */}
          <OutfitCard title="Style Profile" className="col-span-2 lg:col-span-1" delay={0.3}>
            <StyleRadarChart />
          </OutfitCard>

          {/* History Feed */}
          <OutfitCard title="Recent Outfits" className="col-span-4 lg:col-span-1 row-span-1" delay={0.35}>
            <HistoryFeed />
          </OutfitCard>
        </div>
      </div>
    </div>
  );
};

export default BentoDashboard;
