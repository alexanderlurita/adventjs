export function findNaughtyStep(original: string, modified: string): string {
  const difference = original.length > modified.length
  const sourceArray = difference ? original : modified
  const targetArray = difference ? modified : original

  const result = [...sourceArray].find(
    (value, index) => value !== targetArray[index],
  )

  return result ?? ''
}
