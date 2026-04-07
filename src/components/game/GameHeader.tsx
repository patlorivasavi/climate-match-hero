import { Timer, Footprints, Target, Zap } from "lucide-react";

interface Props {
  moves: number;
  matches: number;
  totalPairs: number;
  time: number;
  accuracy: number;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function GameHeader({ moves, matches, totalPairs, time, accuracy }: Props) {
  return (
    <div className="w-full px-4 py-3 flex items-center justify-between bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-3 text-xs font-body font-semibold text-foreground">
        <div className="flex items-center gap-1">
          <Timer className="w-3.5 h-3.5 text-primary" />
          <span>{formatTime(time)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Footprints className="w-3.5 h-3.5 text-eco-ocean" />
          <span>{moves}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs font-body font-bold text-primary">
        <Zap className="w-3.5 h-3.5" />
        <span>{matches}/{totalPairs}</span>
      </div>
      <div className="flex items-center gap-1 text-xs font-body text-muted-foreground">
        <Target className="w-3.5 h-3.5" />
        <span>{accuracy}%</span>
      </div>
    </div>
  );
}

export { formatTime };
