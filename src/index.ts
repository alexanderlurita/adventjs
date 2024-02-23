// DAY 2 - 2023
import { manufacture } from './2023/day02'

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []

// DAY 1 - 2023
// import { findFirstRepeated } from './2023/day01'

// const giftIds = [2, 1, 3, 5, 3, 2]
// const firstRepeatedId = findFirstRepeated(giftIds)
// console.log(firstRepeatedId) // 3
// // Aunque el 2 y el 3 se repiten
// // el 3 aparece primero por segunda vez

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1
// // Es -1 ya que no se repite ningún número

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5
