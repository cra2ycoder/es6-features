/***
 * @note
 * class declaration
 */

class Fruit {
    constructor(name, brand) {
        this.name = name
        this.brand = brand
    }
}

const fruit = new Fruit('apple', 'washington')

console.log(fruit)
// Fruit { name: 'apple', brand: 'washington' }

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @description
 * class expressions
 */

// with no class name
let Math = class {
    constructor(fn, sn) {
        this.fn = fn
        this.sn = sn
    }
}

const math = new Math(1, 2)
console.log(math) // Math { fn: 1, sn: 2 }
console.log('/////////////////////////////////')
///////////////////////////////////////////

// with class name
let Math2 = class MyMath {
    constructor(fn, sn) {
        this.fn = fn
        this.sn = sn
    }
}

const math2 = new Math2(3, 4)
console.log(math2) // MyMath { fn: 3, sn: 4 }
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * prototype methods
 *
 */

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get area() {
        return this.calcArea()
    }

    calcArea() {
        return this.width * this.height
    }
}

const rect = new Rectangle(1, 2)
console.log(rect.area)
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * static function
 */

class Mathematics {
    constructor() {}

    static add(a, b) {
        return a + b
    }

    static subtract(a, b) {
        return a - b
    }
}

console.log(Mathematics.add(10, 10)) // 20
console.log(Mathematics.subtract(10, 10)) // 0
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * class extends
 */

// base class
class BaseFruit {
    constructor(name, brand) {
        this.name = name
        this.brand = brand
    }

    getFruitName() {
        return this.name
    }

    getBrandName() {
        return this.brand
    }

    printFruitDetails() {
        console.log(`fruit name is:${this.name}, brand name is: ${this.brand}`)
    }

    overWriteData() {
        console.log('I can be overwrite by the sub-class')
    }
}

// extending class
class Apple extends BaseFruit {
    constructor(name, brand) {
        super(name, brand)
    }

    overWriteData() {
        // calling super class function before executing this current statement
        super.overWriteData()
        console.log('I have overwritten by the apple sub-class')
    }
}

const apple = new Apple('apple', 'washington')

console.log(apple.getFruitName())
console.log(apple.getBrandName())

apple.printFruitDetails()
apple.overWriteData()
console.log('/////////////////////////////////')
///////////////////////////////////////////
