const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {

      padding: {
      DEFAULT:'15px',
      },
      
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1300px',
    },
    extend: {
      colors:{

      primary:'#101828',
      secondary:'#667085',
      accent:{
        DEFAULT:'#ed1d24',
        hover:'#dd242a', 
      },
      body:'#dedede',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  // Flatten the color palette
  function flattenColorPalette(colors) {
    const result = {};
    
    function recurse(current, property) {
      for (const key in current) {
        const value = current[key];
        const newKey = property ? `${property}-${key}` : key;
        
        if (typeof value === 'object') {
          recurse(value, newKey);
        } else {
          result[newKey] = value;
        }
      }
    }
    
    recurse(colors, '');
    return result;
  }

  let allColors = flattenColorPalette(theme("colors"));
  
  // Create CSS variables
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add the CSS variables to the root element
  addBase({
    ":root": newVars,
  });
}
