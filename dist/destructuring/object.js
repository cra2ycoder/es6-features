'use strict'

var _console

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    )
}

function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance')
}

function _iterableToArray(iter) {
    if (
        Symbol.iterator in Object(iter) ||
        Object.prototype.toString.call(iter) === '[object Arguments]'
    )
        return Array.from(iter)
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i]
        }
        return arr2
    }
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {}
    var target = _objectWithoutPropertiesLoose(source, excluded)
    var key, i
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i]
            if (excluded.indexOf(key) >= 0) continue
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
                continue
            target[key] = source[key]
        }
    }
    return target
}

function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {}
    var target = {}
    var sourceKeys = Object.keys(source)
    var key, i
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
    }
    return target
}

var data = {
    name: 'es6',
    concept: 'destructure',
    version: 6.0,
    language: 'javascript',
    isJava: false // basic assignment
    // var { name, version } = data;
    // console.log(name);
    // console.log(version);
}
console.log('/////////////////////////////////') // assigning to new variable names

var newName = data.name,
    newVersion = data.version
console.log(newName)
console.log(newVersion) // ^ here, name and version cant be used

console.log('/////////////////////////////////') // default values

var _a = {
        a: 4
    },
    _a$a = _a.a,
    a = _a$a === void 0 ? 1 : _a$a,
    _a$b = _a.b,
    b = _a$b === void 0 ? 2 : _a$b
console.log(a)
console.log('/////////////////////////////////') // new names with default values

var _x = {
        x: 9
    },
    _x$x = _x.x,
    newX = _x$x === void 0 ? 6 : _x$x,
    _x$y = _x.y,
    newY = _x$y === void 0 ? 7 : _x$y
console.log(newX)
console.log('/////////////////////////////////')
var people = {
    name: 'Mike Smith',
    family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
    },
    age: 35
}
var _people$family = people.family,
    mother = _people$family.mother,
    father = _people$family.father,
    sister = _people$family.sister
console.log(mother)
console.log(father)
console.log(sister)
console.log('/////////////////////////////////') // dynamic property name with destructuring

var customName = 'dynamicPropName'
var _dynamicPropName = {
        dynamicPropName: 101000
    },
    refProp = _dynamicPropName[customName]
console.log(refProp)
console.log('/////////////////////////////////') // rest in object destructuring

var _q$r$s$t = {
        q: 1,
        r: 2,
        s: 3,
        t: 4
    },
    q = _q$r$s$t.q,
    r = _q$r$s$t.r,
    restProps = _objectWithoutProperties(_q$r$s$t, ['q', 'r'])

;(_console = console).log.apply(
    _console,
    [q, r].concat(_toConsumableArray(restProps))
)
