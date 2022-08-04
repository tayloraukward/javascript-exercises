const removeFromArray = function(arr, ...args) {
    return arr.filter(function(val) {
        return !args.includes(val);
    } );
}

// Do not edit below this line
module.exports = removeFromArray;
