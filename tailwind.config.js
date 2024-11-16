/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BrightLightBlue : '#34D3F6' ,
        green : '#83FF97',
        Green: {
          50: '#e6fff0',  // Very light green
          100: '#ccffdf', // Lighter green
          200: '#99ffbf', // Light green
          300: '#66ff9f', // Custom green lighter
          400: '#33ff80', // Slightly lighter than original
          500: '#83FF97', // Original custom green
          600: '#33cc66', // Slightly darker
          700: '#28a653', // Dark green
          800: '#1f8040', // Darker green
          900: '#146633', // Very dark green
        },
      },
      backgroundImage: {
        'elliptical-gradient': 'radial-gradient(ellipse 60% 80% at center, #3C5557 0%, #1D2B2C 80%)',
      },
      boxShadow: {
        'right-only': '4px 0 10px rgba(0, 0, 0, 0.3)', // Shadow on the right side
        'left-only': '-4px 0 10px rgba(0, 0, 0, 0.3)', // Shadow on the left side
        'top-only': '0 -4px 10px rgba(0, 0, 0, 0.3)', // Shadow on the top
        'bottom-only': '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow on the bottom
        'top-bottom': '0 -1px 10px #1D2B2C, 0 1px 10px #1D2B2C',
      },
      wordSpacing: {
        'tight': '-0.05em',
        'normal': '0em',
        'wide': '0.1em',
        'wider': '0.2em',
        'widest': '0.3em',
      },

        "animation": {
          shimmer: "shimmer 2s linear infinite"
        },
        "keyframes": {
          shimmer: {
            from: {
              "backgroundPosition": "0 0"
            },
            to: {
              "backgroundPosition": "-200% 0"
            }
          }
        }
      }
    
    },
  plugins: [
    
  ],
}

