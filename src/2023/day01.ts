export function findFirstRepeated(gifts: number[]): number {
  const seen = new Set()

  for (let i = 0; i < gifts.length; i++) {
    if (seen.has(gifts[i])) {
      return gifts[i]
    } else {
      seen.add(gifts[i])
    }
  }

  return -1
}
