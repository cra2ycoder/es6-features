const list = [20, 100, 45, 44, 35]

/**
 * SELECTION SORT
 *
 */
const size = list.length - 1

for (let i = 0; i < size; i++) {
    for (let j = i + 1; j <= size; j++) {
        let firstValue = list[i]
        let nextValue = list[j]

        /**
         * SWAPPING
         */
        if (firstValue > nextValue) {
            list[i] = nextValue
            list[j] = firstValue
        }
    }
}

console.log({ list })
