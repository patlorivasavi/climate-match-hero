import { motion } from "framer-motion";
import type { GameCard } from "@/lib/gameData";

interface Props {
  card: GameCard;
  onClick: () => void;
  size: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-[3.2rem] h-[3.8rem] text-xl",
  md: "w-[4.5rem] h-[5.2rem] text-3xl",
  lg: "w-[5.5rem] h-[6.5rem] text-4xl",
};

export default function FlipCard({ card, onClick, size }: Props) {
  const isRevealed = card.isFlipped || card.isMatched;

  return (
    <motion.div
      layout
      className={`relative cursor-pointer preserve-3d ${sizeClasses[size]}`}
      style={{ perspective: "600px" }}
      onClick={onClick}
      whileTap={!isRevealed ? { scale: 0.95 } : {}}
      animate={
        card.isMatched
          ? { scale: [1, 1.1, 1], transition: { duration: 0.4 } }
          : {}
      }
    >
      <motion.div
        className="w-full h-full preserve-3d relative"
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Back (hidden side) */}
        <div className="card-face flex items-center justify-center bg-gradient-to-br from-primary to-eco-ocean rounded-xl shadow-card border-2 border-primary/20">
          <span className="text-primary-foreground text-lg opacity-80">🌿</span>
        </div>
        {/* Front (revealed side) */}
        <div
          className={`card-face rotate-y-180 flex flex-col items-center justify-center rounded-xl shadow-card border-2 ${
            card.isMatched
              ? "bg-primary/10 border-primary/40"
              : "bg-card border-border"
          }`}
        >
          <span className={sizeClasses[size].split(" ").pop()}>{card.emoji}</span>
          <span className="text-[8px] sm:text-[9px] text-foreground/70 font-body font-semibold mt-0.5 px-1 text-center leading-tight">
            {card.label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
