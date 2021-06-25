const list = [20, 45, 35, 44, 100]

const findItem = 44
const size = list.length

let result = null

for (let i = 0; i < size; i++) {
    if (list[i] === findItem) {
        result = list[i]
        break
    }
}

console.log({ linearSearch: result })
