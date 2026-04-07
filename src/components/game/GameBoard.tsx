import { useGameState } from "@/hooks/useGameState";
import { difficultyConfig } from "@/lib/gameData";
import { playButtonSound } from "@/lib/sounds";
import MainMenu from "@/components/game/MainMenu";
import FlipCard from "@/components/game/FlipCard";
import GameHeader from "@/components/game/GameHeader";
import FactPopup from "@/components/game/FactPopup";
import GameComplete from "@/components/game/GameComplete";
import { motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";

export default function GameBoard() {
  const {
    cards, difficulty, phase, moves, matches, wrongTries, time,
    score, accuracy, earnedBadges, currentFact, totalPairs,
    startGame, flipCard, dismissFact, setPhase,
  } = useGameState();

  if (phase === "menu") {
    return <MainMenu onStart={startGame} />;
  }

  const config = difficultyConfig[difficulty];
  const cardSize = difficulty === "hard" ? "sm" : difficulty === "medium" ? "md" : "md";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <GameHeader
        moves={moves}
        matches={matches}
        totalPairs={totalPairs}
        time={time}
        accuracy={accuracy}
      />

      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={() => { playButtonSound(); setPhase("menu"); }}
          className="flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Menu
        </button>
        <button
          onClick={() => { playButtonSound(); startGame(difficulty); }}
          className="flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Restart
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 flex items-center justify-center px-2 py-2 overflow-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid gap-2.5"
          style={{
            gridTemplateColumns: `repeat(${config.cols}, 1fr)`,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
            >
              <FlipCard
                card={card}
                onClick={() => flipCard(card.id)}
                size={cardSize}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fact popup */}
      {phase === "fact" && currentFact && (
        <FactPopup fact={currentFact} onDismiss={dismissFact} />
      )}

      {/* Complete screen */}
      {phase === "complete" && (
        <GameComplete
          score={score}
          moves={moves}
          time={time}
          accuracy={accuracy}
          earnedBadges={earnedBadges}
          difficulty={difficulty}
          onRestart={() => startGame(difficulty)}
          onMenu={() => setPhase("menu")}
        />
      )}
    </div>
  );
}
