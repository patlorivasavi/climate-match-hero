import { motion } from "framer-motion";
import type { Badge, Difficulty } from "@/lib/gameData";
import { actionChecklist } from "@/lib/gameData";
import { formatTime } from "./GameHeader";
import { playButtonSound } from "@/lib/sounds";

interface Props {
  score: number;
  moves: number;
  time: number;
  accuracy: number;
  earnedBadges: Badge[];
  difficulty: Difficulty;
  onRestart: () => void;
  onMenu: () => void;
}

export default function GameComplete({
  score, moves, time, accuracy, earnedBadges, difficulty, onRestart, onMenu,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm px-4 overflow-y-auto py-8"
    >
      <motion.div
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-card rounded-2xl p-6 max-w-sm w-full shadow-card-hover border border-border"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-5xl mb-2"
          >
            🎉
          </motion.div>
          <h2 className="font-display text-2xl text-gradient-earth mb-1">Level Complete!</h2>
          <p className="text-xs text-muted-foreground font-body capitalize">{difficulty} mode</p>

          <div className="grid grid-cols-2 gap-3 mt-5">
            {[
              { label: "Score", value: score, emoji: "🏆" },
              { label: "Moves", value: moves, emoji: "👣" },
              { label: "Time", value: formatTime(time), emoji: "⏱️" },
              { label: "Accuracy", value: `${accuracy}%`, emoji: "🎯" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-muted rounded-xl p-3"
              >
                <div className="text-lg">{stat.emoji}</div>
                <div className="font-body font-bold text-foreground text-lg">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {earnedBadges.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-body font-bold text-primary mb-2">Badges Earned</p>
              <div className="flex flex-wrap justify-center gap-2">
                {earnedBadges.map((badge, i) => (
                  <motion.div
                    key={badge.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    className="bg-primary/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5"
                  >
                    <span className="text-sm">{badge.emoji}</span>
                    <span className="text-[10px] font-body font-semibold text-foreground">{badge.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-5 text-left">
            <p className="text-xs font-body font-bold text-primary mb-2">🌍 Help The Planet</p>
            <div className="space-y-1.5">
              {actionChecklist.slice(0, 4).map((item) => (
                <div key={item} className="text-[11px] font-body text-foreground/70 bg-muted rounded-lg px-3 py-1.5">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { playButtonSound(); onRestart(); }}
              className="flex-1 py-3 bg-gradient-to-r from-primary to-eco-ocean text-primary-foreground font-body font-bold rounded-xl shadow-card text-sm"
            >
              Play Again 🔄
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { playButtonSound(); onMenu(); }}
              className="flex-1 py-3 bg-muted text-foreground font-body font-bold rounded-xl text-sm"
            >
              Menu 🏠
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
