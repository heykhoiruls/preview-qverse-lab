import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Add this if you have files in the pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Add this if you have a components folder
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js 13+ apps using the app directory
    "./src/**/*.{js,ts,jsx,tsx}", // If you have a src folder, adjust the path if needed
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
