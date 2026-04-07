import { motion, AnimatePresence } from "framer-motion";
import { difficultyConfig, type Difficulty } from "@/lib/gameData";
import { playButtonSound } from "@/lib/sounds";

interface Props {
  onStart: (difficulty: Difficulty) => void;
}

const difficulties: Difficulty[] = ["easy", "medium", "hard"];
const diffColors: Record<Difficulty, string> = {
  easy: "from-eco-green-light to-eco-green",
  medium: "from-eco-ocean to-eco-ocean-deep",
  hard: "from-eco-orange to-destructive",
};

export default function MainMenu({ onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-10"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-6xl mb-4"
      >
        🌍
      </motion.div>
      <h1 className="text-3xl sm:text-4xl font-display text-gradient-earth mb-2 text-center">
        Climate Match
      </h1>
      <p className="text-muted-foreground font-body text-sm mb-1 text-center">SDG 13 · Climate Action</p>
      <p className="text-muted-foreground/70 text-xs mb-8 text-center max-w-xs">
        Match climate-related cards, learn facts, and discover how you can help the planet!
      </p>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        {difficulties.map((d, i) => (
          <motion.button
            key={d}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              playButtonSound();
              onStart(d);
            }}
            className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${diffColors[d]} text-primary-foreground font-body font-bold text-lg shadow-card transition-shadow hover:shadow-card-hover`}
          >
            {difficultyConfig[d].label}
            <span className="block text-xs font-normal opacity-80 mt-0.5">
              {difficultyConfig[d].pairs} pairs
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-xs text-muted-foreground/50 text-center"
      >
        🎵 Sound effects enabled · Tap to play
      </motion.div>
    </motion.div>
  );
}
