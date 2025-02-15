import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTWMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-headline-01",
        "text-headline-02",
        "text-subtitle-01",
        "text-subtitle-02",
        "text-subtitle-03",
        "text-subtitle-04",
        "text-body-01",
        "text-body-02",
        "text-body-03",
        "text-body-04",
        "text-caption-01",
        "text-caption-02",
        "text-pixel-headline",
        "text-pixel-body",
        "text-pixel-caption"
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTWMerge(clsx(inputs))
}
