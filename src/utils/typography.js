import Typography from "typography"

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  scaleRatio: 1.8,
  blockMarginBottom: 1.8,
  headerWeight: "600",
  headerFontFamily: ['Inter', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['EB Garamond', 'serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: "#e66796ef"
    },
    // 'a:visited': {
    //   color: "#f789b2ef"
    // },
    // 'h3 > a:visited': {
    //   color: "#e66796ef"
    // }
  })
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}



export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
