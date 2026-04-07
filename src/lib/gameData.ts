export interface CardPair {
  id: string;
  emoji1: string;
  label1: string;
  emoji2: string;
  label2: string;
  fact: string;
  tip: string;
  category: string;
  matchEmoji: string;
}

export const cardPairs: CardPair[] = [
  {
    id: "heatwave",
    emoji1: "☀️",
    label1: "Heatwave",
    emoji2: "🌡️",
    label2: "High Temperature",
    fact: "Heatwaves are becoming more frequent and intense due to climate change.",
    tip: "Stay hydrated and reduce energy usage during peak hours.",
    category: "heat",
    matchEmoji: "🔥",
  },
  {
    id: "floods",
    emoji1: "🌊",
    label1: "Floods",
    emoji2: "🌧️",
    label2: "Heavy Rain",
    fact: "Climate change increases the frequency and severity of flooding events worldwide.",
    tip: "Support local flood defenses and avoid building in flood-prone areas.",
    category: "water",
    matchEmoji: "💧",
  },
  {
    id: "forests",
    emoji1: "🌳",
    label1: "Forests",
    emoji2: "🪓",
    label2: "Deforestation",
    fact: "Forests absorb 2.6 billion tonnes of CO₂ annually – 30% of human emissions.",
    tip: "Support reforestation projects and use sustainably sourced products.",
    category: "forest",
    matchEmoji: "🌿",
  },
  {
    id: "pollution",
    emoji1: "🏭",
    label1: "Pollution",
    emoji2: "💨",
    label2: "Carbon Emissions",
    fact: "CO₂ levels are at their highest in 800,000 years at over 420 ppm.",
    tip: "Reduce your carbon footprint by using public transport or cycling.",
    category: "pollution",
    matchEmoji: "🍃",
  },
  {
    id: "renewable",
    emoji1: "⚡",
    label1: "Renewable Energy",
    emoji2: "🌞",
    label2: "Solar Power",
    fact: "Renewable energy now generates over 30% of the world's electricity.",
    tip: "Switch to a green energy provider and install solar panels if possible.",
    category: "energy",
    matchEmoji: "✨",
  },
  {
    id: "ice",
    emoji1: "🧊",
    label1: "Melting Ice",
    emoji2: "🐧",
    label2: "Arctic Wildlife",
    fact: "Arctic sea ice has declined by 13% per decade since satellite records began.",
    tip: "Reduce energy consumption to slow global warming and protect polar habitats.",
    category: "ice",
    matchEmoji: "❄️",
  },
  {
    id: "ocean",
    emoji1: "🐠",
    label1: "Ocean Life",
    emoji2: "🪸",
    label2: "Coral Reefs",
    fact: "Over 50% of the world's coral reefs have been lost in the last 30 years.",
    tip: "Avoid single-use plastics and support marine conservation organizations.",
    category: "ocean",
    matchEmoji: "🌊",
  },
  {
    id: "wind",
    emoji1: "🌬️",
    label1: "Wind Energy",
    emoji2: "🔋",
    label2: "Clean Power",
    fact: "A single wind turbine can power over 1,500 homes per year.",
    tip: "Advocate for clean energy policies in your community.",
    category: "energy",
    matchEmoji: "💚",
  },
  {
    id: "waste",
    emoji1: "🗑️",
    label1: "Waste",
    emoji2: "♻️",
    label2: "Recycling",
    fact: "Only 9% of all plastic ever produced has been recycled.",
    tip: "Reduce, reuse, and recycle. Choose products with minimal packaging.",
    category: "waste",
    matchEmoji: "🌱",
  },
  {
    id: "transport",
    emoji1: "🚗",
    label1: "Car Emissions",
    emoji2: "🚲",
    label2: "Green Transport",
    fact: "Transport accounts for about 16% of global greenhouse gas emissions.",
    tip: "Walk, cycle, or use public transport whenever possible.",
    category: "transport",
    matchEmoji: "🚀",
  },
  {
    id: "drought",
    emoji1: "🏜️",
    label1: "Drought",
    emoji2: "💧",
    label2: "Water Scarcity",
    fact: "By 2025, half the world's population will live in water-stressed areas.",
    tip: "Conserve water by fixing leaks, taking shorter showers, and collecting rainwater.",
    category: "water",
    matchEmoji: "🌈",
  },
  {
    id: "food",
    emoji1: "🌾",
    label1: "Agriculture",
    emoji2: "🍽️",
    label2: "Food Waste",
    fact: "One-third of all food produced globally is lost or wasted each year.",
    tip: "Plan meals, compost scraps, and buy local seasonal produce.",
    category: "food",
    matchEmoji: "🥗",
  },
  {
    id: "biodiversity",
    emoji1: "🦋",
    label1: "Biodiversity",
    emoji2: "🌺",
    label2: "Ecosystems",
    fact: "1 million species are at risk of extinction due to human activity.",
    tip: "Plant native species in your garden and support wildlife corridors.",
    category: "nature",
    matchEmoji: "🌍",
  },
  {
    id: "air",
    emoji1: "😷",
    label1: "Air Quality",
    emoji2: "🌫️",
    label2: "Smog",
    fact: "Air pollution causes 7 million premature deaths worldwide each year.",
    tip: "Reduce burning fossil fuels and support clean air regulations.",
    category: "pollution",
    matchEmoji: "🌤️",
  },
  {
    id: "sea-level",
    emoji1: "🏖️",
    label1: "Coastal Erosion",
    emoji2: "📈",
    label2: "Rising Sea Levels",
    fact: "Sea levels have risen about 21cm since 1900 and are accelerating.",
    tip: "Support climate policies that aim to limit global temperature rise.",
    category: "water",
    matchEmoji: "⛵",
  },
  {
    id: "fashion",
    emoji1: "👕",
    label1: "Fast Fashion",
    emoji2: "🧵",
    label2: "Textile Waste",
    fact: "The fashion industry produces 10% of global carbon emissions.",
    tip: "Buy second-hand, choose quality over quantity, and repair clothing.",
    category: "waste",
    matchEmoji: "👗",
  },
  {
    id: "methane",
    emoji1: "🐄",
    label1: "Livestock",
    emoji2: "💨",
    label2: "Methane",
    fact: "Methane is 80x more potent than CO₂ as a greenhouse gas over 20 years.",
    tip: "Reduce meat consumption and support sustainable farming practices.",
    category: "food",
    matchEmoji: "🌿",
  },
  {
    id: "wildfire",
    emoji1: "🔥",
    label1: "Wildfires",
    emoji2: "🌲",
    label2: "Forest Loss",
    fact: "Wildfire seasons are now 3 months longer than they were 40 years ago.",
    tip: "Support fire prevention efforts and avoid activities that risk starting fires.",
    category: "forest",
    matchEmoji: "🧯",
  },
];

export interface GameCard {
  id: string;
  pairId: string;
  emoji: string;
  label: string;
  isFlipped: boolean;
  isMatched: boolean;
  side: "a" | "b";
}

export type Difficulty = "easy" | "medium" | "hard";

export const difficultyConfig: Record<Difficulty, { cols: number; rows: number; pairs: number; label: string }> = {
  easy: { cols: 4, rows: 4, pairs: 8, label: "Easy (4×4)" },
  medium: { cols: 4, rows: 5, pairs: 10, label: "Medium (4×5)" },
  hard: { cols: 6, rows: 6, pairs: 18, label: "Hard (6×6)" },
};

export function generateCards(difficulty: Difficulty): GameCard[] {
  const config = difficultyConfig[difficulty];
  const shuffledPairs = [...cardPairs].sort(() => Math.random() - 0.5).slice(0, config.pairs);

  const cards: GameCard[] = [];
  shuffledPairs.forEach((pair) => {
    cards.push({
      id: `${pair.id}-a`,
      pairId: pair.id,
      emoji: pair.emoji1,
      label: pair.label1,
      isFlipped: false,
      isMatched: false,
      side: "a",
    });
    cards.push({
      id: `${pair.id}-b`,
      pairId: pair.id,
      emoji: pair.emoji2,
      label: pair.label2,
      isFlipped: false,
      isMatched: false,
      side: "b",
    });
  });

  return cards.sort(() => Math.random() - 0.5);
}

export function getPairData(pairId: string): CardPair | undefined {
  return cardPairs.find((p) => p.id === pairId);
}

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  condition: (score: number, moves: number, time: number) => boolean;
}

export const badges: Badge[] = [
  {
    id: "eco-beginner",
    name: "Eco Beginner",
    emoji: "🌱",
    description: "Complete your first game",
    condition: () => true,
  },
  {
    id: "climate-warrior",
    name: "Climate Warrior",
    emoji: "⚔️",
    description: "Complete a game with less than 20 moves",
    condition: (_, moves) => moves < 20,
  },
  {
    id: "earth-protector",
    name: "Earth Protector",
    emoji: "🛡️",
    description: "Complete a game in under 60 seconds",
    condition: (_, __, time) => time < 60,
  },
  {
    id: "speed-demon",
    name: "Speed Demon",
    emoji: "⚡",
    description: "Complete a game in under 30 seconds",
    condition: (_, __, time) => time < 30,
  },
  {
    id: "perfect-memory",
    name: "Perfect Memory",
    emoji: "🧠",
    description: "Complete a game with 90%+ accuracy",
    condition: (score) => score >= 90,
  },
];

export const actionChecklist = [
  "🌍 Reduce, reuse, and recycle daily",
  "🚲 Walk or cycle for short trips",
  "💡 Switch off lights and unplug devices",
  "🌿 Plant a tree or support reforestation",
  "🥗 Eat more plant-based meals",
  "💧 Conserve water at home",
  "📢 Spread climate awareness",
  "🗳️ Support climate-friendly policies",
];
