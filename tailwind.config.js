module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1300px',
      xl: '1580px',
      '2xl': '2000px',
    },
    extend: {
      boxShadow: {
        rainbow: '0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        headingStyled: ['TriodPostnaja', 'serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          '100': '#72c1df',
          '200': '#5bb7d9',
          '300': '#43add4',
          '400': '#2ca2ce',
          '500': '#1498c9',
          '600': '#1289b5',
          '700': '#107aa1',
          '800': '#0e6a8d',
          '900': '#0c5b79'
        },
        gold: {
          light: '#ddbf5f',
          base: '#d4af37',
          dark: '#aa8c2c'
        }
      }
    },
    fontFamily: {
      triodPostnaja: ["TriodPostnaja"],
      roboto: ["Roboto"],
      lato: ["Lato"],
      inter: ["Inter"]
    },
    fontSize: {
      h1: [
        "32px",
        {
          lineHeight: "38px",
          letterSpacing: "0.8px",
        },
      ],
      h2: [
        "28px",
        {
          lineHeight: "24px",
        },
      ],
      h3: [
        "20px",
        {
          lineHeight: "23px",
        },
      ],
      h4: [
        "16px",
        {
          lineHeight: "19px",
        },
      ],
      p: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      tinyText: ["14px", { lineHeight: "16.41px" }],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
}
