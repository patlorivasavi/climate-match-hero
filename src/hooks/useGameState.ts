import { useState, useCallback, useRef, useEffect } from "react";
import {
  GameCard,
  Difficulty,
  generateCards,
  getPairData,
  badges,
  type Badge,
  type CardPair,
  difficultyConfig,
} from "@/lib/gameData";
import { playFlipSound, playMatchSound, playMismatchSound, playWinSound } from "@/lib/sounds";

export type GamePhase = "menu" | "playing" | "fact" | "complete";

export interface GameState {
  cards: GameCard[];
  difficulty: Difficulty;
  phase: GamePhase;
  moves: number;
  matches: number;
  wrongTries: number;
  time: number;
  score: number;
  earnedBadges: Badge[];
  currentFact: CardPair | null;
  flippedIds: string[];
}

export function useGameState() {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [phase, setPhase] = useState<GamePhase>("menu");
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [wrongTries, setWrongTries] = useState(0);
  const [time, setTime] = useState(0);
  const [currentFact, setCurrentFact] = useState<CardPair | null>(null);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPairs = difficultyConfig[difficulty].pairs;

  useEffect(() => {
    if (phase === "playing") {
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  const startGame = useCallback((diff: Difficulty) => {
    setDifficulty(diff);
    setCards(generateCards(diff));
    setPhase("playing");
    setMoves(0);
    setMatches(0);
    setWrongTries(0);
    setTime(0);
    setCurrentFact(null);
    setFlippedIds([]);
    setIsLocked(false);
  }, []);

  const flipCard = useCallback(
    (cardId: string) => {
      if (isLocked) return;
      const card = cards.find((c) => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return;

      playFlipSound();

      const newFlipped = [...flippedIds, cardId];
      setFlippedIds(newFlipped);
      setCards((prev) => prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)));

      if (newFlipped.length === 2) {
        setIsLocked(true);
        setMoves((m) => m + 1);

        const first = cards.find((c) => c.id === newFlipped[0])!;
        const second = card;

        if (first.pairId === second.pairId) {
          // Match!
          setTimeout(() => {
            playMatchSound();
            setCards((prev) =>
              prev.map((c) =>
                c.pairId === first.pairId ? { ...c, isMatched: true, isFlipped: true } : c
              )
            );
            setMatches((m) => {
              const newMatches = m + 1;
              if (newMatches === difficultyConfig[difficulty].pairs) {
                // Game complete
                setTimeout(() => {
                  playWinSound();
                  setPhase("complete");
                }, 600);
              }
              return newMatches;
            });
            const pairData = getPairData(first.pairId);
            if (pairData) {
              setCurrentFact(pairData);
              setPhase("fact");
            }
            setFlippedIds([]);
            setIsLocked(false);
          }, 500);
        } else {
          // Mismatch
          setTimeout(() => {
            playMismatchSound();
            setCards((prev) =>
              prev.map((c) =>
                newFlipped.includes(c.id) && !c.isMatched ? { ...c, isFlipped: false } : c
              )
            );
            setWrongTries((w) => w + 1);
            setFlippedIds([]);
            setIsLocked(false);
          }, 1000);
        }
      }
    },
    [cards, flippedIds, isLocked, difficulty]
  );

  const dismissFact = useCallback(() => {
    setCurrentFact(null);
    setPhase("playing");
  }, []);

  const accuracy = moves > 0 ? Math.round((matches / moves) * 100) : 0;
  const score = Math.max(0, Math.round(accuracy * 10 - time * 0.5 + matches * 50 - wrongTries * 10));

  const earnedBadges = badges.filter((b) => b.condition(accuracy, moves, time));

  return {
    cards,
    difficulty,
    phase,
    moves,
    matches,
    wrongTries,
    time,
    score,
    accuracy,
    earnedBadges,
    currentFact,
    totalPairs,
    startGame,
    flipCard,
    dismissFact,
    setPhase,
  };
}
