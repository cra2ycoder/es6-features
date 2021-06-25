const list = [20, 100, 1, 45, 44, 35]

/**
 * BUBBLE SORT
 *
 */

const size = list.length - 1

for (let i = 0; i < size; i++) {
    /**
     * all the data management
     * will be doing at only the 2nd loop
     */
    for (let j = 0; j < size - i; j++) {
        let firstValue = list[j]
        let secondValue = list[j + 1]

        if (firstValue > secondValue) {
            list[j] = secondValue
            list[j + 1] = firstValue
        }
    }
}

console.log(list)
