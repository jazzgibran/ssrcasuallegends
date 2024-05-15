import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'textured2': "url('../assets/texturedbg2.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors: {
        'MountainMeadow': 'rgb(21, 93, 24)',
        'YellowOrange': '#FEAD3D',
        'Turquoise': '#37FAD1',
        'QuarterSpanish': '#f6f2e1',
        'Putty': ' #e7ca90',
        'Sidecar': '#f1e3c0',
        'GreenMist': '#d1d8b6'
      },
      boxShadow: {
        'ylg': '0px -10px 15px -3px rgba(0,0,0,0.3);',
      },
      fontFamily: {
        'montaga': ['var(--font-mont)'],
        'scaly': ['var(--font-scaly)']
      }
    },
  },
  plugins: [],
};
export default config;
