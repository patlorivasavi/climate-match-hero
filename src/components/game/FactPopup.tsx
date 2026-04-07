import { motion, AnimatePresence } from "framer-motion";
import type { CardPair } from "@/lib/gameData";
import { playButtonSound } from "@/lib/sounds";

interface Props {
  fact: CardPair;
  onDismiss: () => void;
}

export default function FactPopup({ fact, onDismiss }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm px-6"
        onClick={() => { playButtonSound(); onDismiss(); }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-card rounded-2xl p-6 max-w-sm w-full shadow-card-hover border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="text-4xl mb-3"
            >
              {fact.matchEmoji}
            </motion.div>
            <h3 className="font-display text-lg text-foreground mb-1">
              {fact.emoji1} {fact.label1} + {fact.emoji2} {fact.label2}
            </h3>
            <div className="mt-4 bg-primary/5 rounded-xl p-3 text-left">
              <p className="text-xs font-body font-bold text-primary mb-1">📚 Climate Fact</p>
              <p className="text-sm font-body text-foreground/80">{fact.fact}</p>
            </div>
            <div className="mt-3 bg-eco-gold/10 rounded-xl p-3 text-left">
              <p className="text-xs font-body font-bold text-accent-foreground mb-1">💡 What You Can Do</p>
              <p className="text-sm font-body text-foreground/80">{fact.tip}</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { playButtonSound(); onDismiss(); }}
              className="mt-5 w-full py-3 bg-gradient-to-r from-primary to-eco-ocean text-primary-foreground font-body font-bold rounded-xl shadow-card"
            >
              Continue Playing 🎮
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
