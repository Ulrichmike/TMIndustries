/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eed3c1ff", //beige
        primaire: "#a57250ff",
        intermediaire: "#bb9161ff",
        final: "#a57250",
        secondary: "#ff0000", //rouge
        ternaire: "#1d7ac0", //bleu
        variation: "#fbe0cf",
        paleta1: "#f0e7d6",
        paleta2: "#e5f7f4ff",
        paleta3: "#ea2e00",
        paleta4: "#e6512c",
      },
    },
  },
  plugins: [],
};
