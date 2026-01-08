# Pokédex – React + TypeScript

A Pokédex built with React and TypeScript that consumes the PokeAPI.
It allows users to search Pokémon by name and displays relevant information such as
name, type, abilities, and front sprite.

## 🚀 Features

- Search Pokémon by name
- External API consumption (PokeAPI)
- Asynchronous state handling (`loading`, `error`)
- Race condition prevention using `useRef`
- Logic separation using custom hooks
- Strict typing with TypeScript

## 🛠 Tech Stack

- React
- Tailwindcss
- TypeScript
- Fetch API
- Custom Hooks
- PokeAPI
## 📁 Project Structure
src/
├─ hooks/
│ └─ usePokemon.ts
├─ components/
│ └─Pokemon/
│   └─ GetPokemon.tsx
│ └─ index.ts
├─ shared/
│ └─ index.ts
├─ URL/
│ └─ URL.ts

## 🧠 Key Learnings

- Handling asynchronous requests in React
- Preventing outdated API responses from updating state
- Understanding the difference between `useState` and `useRef`
- Properly typing data from external APIs
- Separating business logic from UI components

## ▶️ Getting Started

```bash
npm install
  npm run dev
````

## ⭐ Project Link

https://pokedex-api-consumption.netlify.app/

