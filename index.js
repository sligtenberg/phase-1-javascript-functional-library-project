function myEach (collection, callback) {
    myMap (collection, callback)
    return collection
}

function myMap (collection, callback) {
    const collectionArray = Object.values(collection)
    const mappedArray = []
    for (let i = 0; i < collectionArray.length; i++) {
        mappedArray.push(callback(collectionArray[i]))
    }
    return mappedArray
}

function myReduce (collection, callback, acc) {
    const collectionArray = Object.values(collection)
    if (acc === undefined) {
        acc = collectionArray.splice(0, 1)[0]
    }
    for (let i = 0; i < collectionArray.length; i++) {
        acc = callback(acc, collectionArray[i], collection)
    }
    return acc
}

function myFind (collection, predicate) {
    const collectionArray = Object.values(collection)
    for (let i = 0; i < collectionArray.length; i++) {
        if (predicate(collectionArray[i]) === true) {
            return collection[i]
        }
    }
}

function myFilter (collection, predicate) {
    const collectionArray = Object.values(collection)
    const result = []
    for (let i = 0; i < collectionArray.length; i++) {
        if (predicate(collectionArray[i]) === true) {
            result.push(collectionArray[i])
        }
    }
    return result
}

function mySize (collection) {
    const collectionArray = Object.values(collection)
    return collectionArray.length
}

function myFirst (array, int) {
    if (int === undefined) return array[0]
    return array.slice(0, int)
}

function myLast (array, int) {
    if (int === undefined) return array[array.length - 1]
    return array.slice(-1 * int)
}

function myKeys (object) {
    return Object.keys(object)
}

function myValues (object) {
    return Object.values(object)
}

const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function doubler (input) {
    return input * 2
}