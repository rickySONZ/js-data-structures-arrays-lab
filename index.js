// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver(name) {
    const newMenu = [...drivers.slice(0, drivers.length), name] 
    return newMenu
}

function prependDriver(name) {
    const newMenu = [name, ...drivers.slice(0, drivers.length)] 
    return newMenu
}

function removeLastDriver(name) {
    const newMenu = drivers.slice(0, drivers.length - 1)
    return newMenu
}

function removeFirstDriver(name) {
    const newMenu = drivers.slice(1, drivers.length)
    return newMenu
}