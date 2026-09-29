# Climate Match Mania

Build a mobile-first web app game called “Climate Match – SDG 13”.



Concept:

This is a memory-based tile matching game focused on Climate Action (SDG 13). The goal is to educate users about climate change through interactive gameplay.



Core Gameplay:

- Display a grid of cards (start with 4x4 grid).

- All cards are initially flipped (hidden).

- When a user taps two cards:

  - If they match (same theme or related concept), keep them open.

  - If they don’t match, flip them back after 1 second.



Card Themes:

Use climate-related categories such as:

- Summer / Heatwaves

- Floods / Heavy Rain

- Forests / Deforestation

- Pollution / Carbon Emissions

- Renewable Energy / Solar & Wind



Matching Logic:

- Cards can be identical OR logically related (e.g., “Heatwave” matches with “High Temperature”).

- After a successful match:

  1. Show a small animation (e.g., sun, rain, trees, fire).

  2. Display a popup with:

     - A short climate fact

     - A real-life precaution or action tip



Example:

Match: Heatwave ☀️

Fact: “Heatwaves are becoming more frequent due to climate change.”

Tip: “Stay hydrated and reduce energy usage during peak hours.”



Game Features:

- Timer to track how fast the player completes the game

- Score system based on:

  - Number of moves

  - Time taken

  - Accuracy (correct matches vs wrong tries)

- Restart button

- Level progression:

  - Easy (4x4 grid)

  - Medium (5x4 grid)

  - Hard (6x6 grid)



UI/UX Design:

- Clean, modern, eco-friendly design

- Use green, blue, and earthy tones

- Smooth animations when flipping cards

- Responsive design for mobile screens

- Friendly fonts and icons



Extra Features:

- Badge system:

  - “Eco Beginner”

  - “Climate Warrior”

  - “Earth Protector”

- After completing a level:

  - Show score summary

  - Show “What you can do to help the planet” checklist



Accessibility:

- Simple controls

- Clear readable text

- Minimal clutter



Tech Preferences:

- Use simple front-end stack (HTML, CSS, JavaScript or React)

- Keep code modular and clean

- No backend required (local state is enough)



Goal:

Make the game fun, educational, and engaging so users learn climate awareness while playing.



Make it more interactive with animations and better UI”

👉 “Add sound effects for match and wrong attempts”

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1c97c134-b2e8-40e9-a596-2f6a99b4654d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
