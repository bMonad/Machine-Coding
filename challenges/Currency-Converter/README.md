# Currency Converter

A simple and modern currency converter web application built with React and Vite. This project allows users to convert between different currencies using real-time exchange rates fetched from an open API.

## Features

- **Real-time Exchange Rates:** Fetches up-to-date currency rates from [open.er-api.com](https://open.er-api.com/).
- **Intuitive UI:** Clean, responsive interface with easy-to-use input fields and currency selectors.
- **Reusable Components:** Modular React components for maintainability and scalability.
- **Custom Hook:** Encapsulates currency fetching logic in a custom React hook.
- **Error Handling:** Displays loading and error states for better user experience.

## Project Structure

```
Currency-Converter/
│
├── bun.lock                  # Bun package manager lock file
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation (this file)
├── vite.config.js            # Vite configuration
│
├── public/                   # Static assets
│   └── vite.svg
│
└── src/                      # Source code
	 ├── App.jsx               # Main application component
	 ├── App.css               # App-level styles
	 ├── index.css             # Global styles
	 ├── main.jsx              # Entry point for React
	 │
	 ├── assets/               # Image and SVG assets
	 │   └── react.svg
	 │
	 ├── components/           # Reusable React components
	 │   └── InputBox.jsx      # Input and currency selector component
	 │
	 └── hooks/                # Custom React hooks
		  └── useCurrency.js    # Hook for fetching currency data
```

## Key Files and Their Roles

- **src/App.jsx**: Main component that manages state and renders the currency converter UI.
- **src/components/InputBox.jsx**: Reusable input component for entering amounts and selecting currencies.
- **src/hooks/useCurrency.js**: Custom hook to fetch available currencies and exchange rates, and manage loading/error states.
- **src/main.jsx**: Entry point that renders the React app.
- **public/**: Contains static assets like SVGs.

## How It Works

1. **Fetching Currencies & Rates:**

   - The `useCurrency` hook fetches the latest exchange rates for the selected base currency from the API.
   - It provides the list of available currencies, the current exchange rate, and loading/error states.

2. **User Input:**

   - Users enter an amount and select source/target currencies using the `InputBox` component.
   - The app calculates and displays the converted amount in real time.

3. **UI & Styling:**
   - Uses Tailwind CSS utility classes for styling (see className props in components).
   - Responsive and accessible design.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (or [Bun](https://bun.sh/))
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/bMonad/UIQuests/tree/main/challenges/Currency-Converter
   cd Currency-Converter
   ```
2. **Install dependencies:**
   ```sh
   bun install
   # or
   npm install
   ```
3. **Start the development server:**
   ```sh
   bun run dev
   # or
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## API Reference

- **Exchange Rate API:** [https://open.er-api.com/v6/latest/{base}](https://open.er-api.com/v6/latest/{base})
  - Returns a JSON object with currency rates for the given base currency.

## Customization

- You can easily add more features, such as historical rates, charts, or persistent settings.
- The code is modular and easy to extend with new components or hooks.

---

**Happy Coding!**
