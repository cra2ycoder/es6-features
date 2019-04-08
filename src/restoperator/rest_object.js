/***
 * @note
 * OBJECT
 */

const profile = {
    name: 'es6',
    features: 'spread/rest operator',
    ratings: 10
}
/**
 * below statement will through error
 * as object cant be spared by default
 */
// console.log(...profile) // type error
console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * clone/copy object
 */

const clonedProfile = { ...profile }
console.log(clonedProfile) // { name: 'es6', features: 'spread/rest operator', ratings: 10 }

const newDataWithClonedProfile = { ...clonedProfile, x: 4, y: 5, z: 6 }
console.log(newDataWithClonedProfile)
// ^ { name: 'es6', features: 'spread/rest operator', ratings: 10, x: 4, y: 5, z: 6 }

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * concat/merge
 */

const releaseNotes = {
    version: '4.5.6',
    notes: 'concat features enabled for object with spread'
}

const mergedProfile = { ...profile, ...releaseNotes }
console.log(mergedProfile)

console.log('/////////////////////////////////')
///////////////////////////////////////////

/**
 * @note
 * merge multiple objects with rest operator + function rest argument support
 */

const mergeObjects = (...objects) => ({ ...objects })

const mergeObjectsType2 = (...objects) => {
    let c = {}
    for (let obj of objects) {
        c = { ...c, ...obj }
    }
    return c
}

const mergedObj = mergeObjects(profile, releaseNotes, { x: 4, y: 5, z: 6 })
console.log(mergedObj)

const mergedObjType2 = mergeObjectsType2(profile, releaseNotes, {
    x: 4,
    y: 5,
    z: 6
})
console.log(mergedObjType2)

console.log('/////////////////////////////////')
///////////////////////////////////////////
