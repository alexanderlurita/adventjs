export function manufacture(gifts: string[], materials: string): string[] {
  const result = []

  for (const gift of gifts) {
    const giftChars = new Set(gift)
    let canManufacture = true

    for (const char of giftChars) {
      if (!materials.includes(char)) {
        canManufacture = false
        break
      }
    }

    if (canManufacture) {
      result.push(gift)
    }
  }

  return result
}
