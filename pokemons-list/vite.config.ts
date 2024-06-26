import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonList",
      filename: "remoteEntry.js",
      exposes: {
        "./PokemonList": "./src/components/PokemonList",
      },
      shared: ["react", "react-dom", "@mui/x-data-grid", "@emotion/styled"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
