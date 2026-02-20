import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface OutfitHistoryItem {
  id: string;
  occasion: string;
  weather: string;
  summary: string;
  date: string;
}

const mockHistory: OutfitHistoryItem[] = [
  { id: "1", occasion: "Business Meeting", weather: "Sunny", summary: "Navy blazer with cream chinos and leather loafers", date: "Today" },
  { id: "2", occasion: "Date Night", weather: "Cloudy", summary: "Black turtleneck, tailored trousers, suede boots", date: "Yesterday" },
  { id: "3", occasion: "Weekend Brunch", weather: "Sunny", summary: "Linen shirt, relaxed jeans, white sneakers", date: "2 days ago" },
  { id: "4", occasion: "Gallery Opening", weather: "Cold", summary: "Camel overcoat, dark denim, chelsea boots", date: "Last week" },
];

const HistoryFeed = () => {
  return (
    <div className="flex flex-col gap-0">
      {mockHistory.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4 }}
          className="flex gap-3 py-3 border-b border-border last:border-0"
        >
          <div className="flex flex-col items-center pt-1">
            <div className="w-2 h-2 rounded-full bg-primary" />
            {i < mockHistory.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-sm font-medium text-foreground font-body">{item.occasion}</span>
              <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.date}
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.summary}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HistoryFeed;
