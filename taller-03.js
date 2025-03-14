//1
function desglosarString(cadena, tipo) {
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);
    let contador = 0;
    for (caracter of cadena.toLowerCase()) {
        if (tipo === "vocales" && vocales.has(caracter)) {
            contador++;
        } else if (tipo === "consonantes" && !vocales.has(caracter) && caracter.match(/[a-z]/i)) {
            contador++;
        }
    }

    return contador;
}

//2
function twoSum(nums, target) {
    for (numero of nums) {
        const complemento = target - numero;
        const indiceComplemento = nums.indexOf(complemento);
        if (indiceComplemento !== -1 && indiceComplemento !== nums.indexOf(numero)) {
            return [nums.indexOf(numero), indiceComplemento];
        }
    }
    return [];
}

//3
function conversionRomana(romano) {
    const valores = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;
    let previo = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        const actual = valores[romano[i]];
        if (actual < previo) {
            total -= actual;
        } else {
            total += actual;
        }
        previo = actual;
    }

    return total;
}

//uso
console.log(desglosarString("murcielagos", "vocales")); 
console.log(desglosarString("murcielagos", "consonantes")); 

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 2], 6));

console.log(conversionRomana("III")); 
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV")); 
console.log(conversionRomana("MXMVII"));
