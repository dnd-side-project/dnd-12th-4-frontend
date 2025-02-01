import chroma from "chroma-js"

type ColorKeyType = "primary" | "secondary"

const generateColorPalette = (hex: string, numColors: number = 10) => {
  const palette = chroma
    .scale([chroma(hex).brighten(2), hex, chroma(hex).darken(2)])
    .mode("lab")
    .colors(numColors)

  return palette
}

export const setDocumentColor = (color: string, colorKey: ColorKeyType, number: number = 10): void => {
  const palette = generateColorPalette(color, number)

  palette.forEach((color, i) => {
    if (i === number / 2 - 1) {
      document.documentElement.style.setProperty(`--${colorKey}-color`, color)
      document.documentElement.style.setProperty(`--${colorKey}-color-${i + 1}0`, color)
    } else {
      document.documentElement.style.setProperty(`--${colorKey}-color-${i + 1}0`, color)
    }
  })
}
