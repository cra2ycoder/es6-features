const list = [120, 20, 100, 45, 44, 35]

/***
 * insertion sort
 */
const size = list.length
const startIndex = 1

for (let i = startIndex; i < size; i++) {
    let j = i
    let curValue = list[i]

    while (j > 0 && list[j - 1] > curValue) {
        list[j] = list[j - 1]
        j--
    }
    list[j] = curValue
}

console.log(list)
