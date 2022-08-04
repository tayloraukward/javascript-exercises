const reverseString = function(string) {
    let str = string.split(' ');
    let arrayFinal = str.map(swap);
    let finalOrder = swapArr(arrayFinal);
    return finalOrder.join(' ');
};
function swap (string) {
    let str = string.split('')
    let l = 0;
    let r = string.length - 1;
    for (; l <= r; l++){
        let temp = str[l];
        str[l] = str[r];
        str[r] = temp;
        r--;
    }
    return str.join('');
}
 
function swapArr (arr){
    let l1 = 0;
    let r1 = arr.length -1;
    for (; l1 <= r1; l1++) {
        let temp = arr[l1];
        arr[l1] = arr[r1];
        arr[r1] = temp;
        r1--;
    }
    return arr;
}


// Do not edit below this line
module.exports = reverseString;
