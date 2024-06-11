function getFirstValue(array) {
    return array[0];
}

function incrementItems(array) {
    for (let i = 0; i <= array.length; i++) {
        array[i] += 1;
        return array;
    }
}

let test = [1, 2, 3, 4, 5];

console.log(incrementItems(test));