/**
 * @note
 * in binary search
 * items should be sorted by default
 */
const list = [20, 45, 35, 44, 100].sort((a, b) => a - b)

const findItem = 35

let startIndex = 0
let endIndex = list.length - 1
let midIndex = 0
let result = null

while (startIndex <= endIndex) {
    /**
     * to round the value from decimal
     */
    midIndex = parseInt((startIndex + endIndex) / 2, 10)

    const foundValue = list[midIndex]

    if (foundValue === findItem) {
        result = foundValue
        break
    }

    if (foundValue < findItem) {
        startIndex = midIndex + 1
    } else {
        endIndex = midIndex - 1
    }
}

console.log({ binarySearch: result })
