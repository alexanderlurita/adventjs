export function maxDistance(movements: string): number {
  const a = movements.split('>').length - 1
  const b = movements.split('<').length - 1
  const c = movements.length - a - b

  console.log({ a, b, c })

  return Math.abs(a - b) + c
}
