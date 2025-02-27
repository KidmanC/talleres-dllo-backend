//1
function findMax(list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

//2
function includes(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return true;
        }
    }
    return false;
}

//3
function sum(list) {
    let suma = 0;
    for (let i = 0; i < list.length; i++) {
        suma += list[i];
    }
    return suma;
}

//4
function missingNumbers(list) {
    let missing = [];
    for (let i = findMin(list); i <= findMax(list); i++) {
        if (!includes(list, i)) {
            missing.push(i);
        }
    }
    return missing;
}

// funcion axuliar
function findMin(list) {
    let min = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}


// uso
console.log(findMax([3,17,-1,4,-19]));
console.log(includes([3,17,-1,4,-19], 2));
console.log(includes([3,17,-1,4,-19], 4));
console.log(sum([3,17,-1,4,-19]));
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));
