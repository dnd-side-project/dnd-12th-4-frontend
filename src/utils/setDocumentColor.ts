import chroma from "chroma-js"

export type ColorKeyType = "primary" | "secondary"

export const generateColorPalette = (hex: string, numColors: number = 9) => {
  try {
    const palette = chroma
      .scale([chroma(hex).brighten(2), hex, chroma(hex).darken(2)])
      .mode("lab")
      .colors(numColors)

    return palette
  } catch {
    return []
  }
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

export const generateCSSVariables = (palette: string[], colorKey: ColorKeyType, centerColor: string): string => {
  return (
    palette
      .map((color, index) => {
        const percentage = (index + 1) * 10
        return `--${colorKey}-color-${percentage}: ${color};`
      })
      .join("\n") +
    `
    --${colorKey}-color: ${centerColor};
  `
  )
}
