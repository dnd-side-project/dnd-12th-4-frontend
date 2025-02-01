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

export const setDocumentColor = (centerColor: string, colorKey: ColorKeyType, number: number = 9): void => {
  const palette = generateColorPalette(centerColor, number)

  document.documentElement.style.setProperty(`--${colorKey}-color`, centerColor)
  palette.forEach((color, i) => {
    document.documentElement.style.setProperty(`--${colorKey}-color-${i + 1}0`, color)
  })
}

export const generateCSSVariables = (palette: string[], colorKey: ColorKeyType, centerColor: string): string => {
  return (
    palette
      .map((color, i) => {
        return `--${colorKey}-color-${i + 1}0: ${color};`
      })
      .join("\n") +
    `
    --${colorKey}-color: ${centerColor};
  `
  )
}
