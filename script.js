'use strict'

// filter

const names = ['Ivan', 'Ann', 'Kseniya', 'Voldemart']

const shortNames = names.filter((name) => {
    return name.length < 5
})

console.log(shortNames)


// map

const answers = ['Ivan', 'AnnA', 'Hello']

const result = answers.map(item => item.toLowerCase())

console.log(result)


// every/some

const some = [4, 'qwq', 'sfsagsdfg']

console.log(some.some(item => typeof(item) === 'number'))
console.log(some.every(item => typeof(item) === 'number'))

// reduce

const arr = [4,5,1,3,2,6]
                // 0    4
                // 4    5
                // 9    1
                // 10   3
                // 13   2
                // 15   6
                // 21   result
const result = arr.reduce((sum, current) => sum + current)
console.log(result)

const arr = ['apple', 'pear', 'plum']
const result = arr.reduce((sum, current) => `${sum}, ${current}`)
console.log(result)

// получим только persone

const obj = {
    ivan: 'persone',
    anna: 'persone',
    dog: 'animal',
    cat: 'animal'
}

const newArr = Object.entries(obj)
                     .filter(item => item[1] === 'persone') // получили ivan: persone и anna: persone
                     .map(item => item[0]) // получили только ivan и anna

console.log(newArr)