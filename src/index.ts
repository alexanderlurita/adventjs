// DAY 6 - 2023
import { maxDistance } from './2023/day06'

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

// DAY 5- 2023
// import { cyberReindeer } from './2023/day05'

// const road = 'S..|...|..'
// const time = 10 // unidades de tiempo
// const result = cyberReindeer(road, time)

// console.log(result)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/

// DAY 4 - 2023
// import { decode } from './2023/day04'

// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

// DAY 3 - 2023
// import { findNaughtyStep } from './2023/day03'

// const original = 'abcd'
// const modified = 'abcde'
// console.log(findNaughtyStep(original, modified)) // 'e'

// const original2 = 'stepfor'
// const modified2 = 'stepor'
// console.log(findNaughtyStep(original2, modified2)) // 'f'

// const original3 = 'abcde'
// const modified3 = 'abcde'
// console.log(findNaughtyStep(original3, modified3)) // ''

// DAY 2 - 2023
// import { manufacture } from './2023/day02'

// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// // 'tren' SÍ porque sus letras están en 'tronesa'
// // 'oso' SÍ porque sus letras están en 'tronesa'
// // 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts2 = ['juego', 'puzzle']
// const materials2 = 'jlepuz'

// console.log(manufacture(gifts2, materials2)) // ["puzzle"]

// const gifts3 = ['libro', 'ps5']
// const materials3 = 'psli'

// console.log(manufacture(gifts3, materials3)) // []

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
