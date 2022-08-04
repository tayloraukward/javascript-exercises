const removeFromArray = function(arr, ...args) {
    if (args.length == undefined) return arr;
    else if (args.length === 1) {
        let final = arr.filter(function(value){
            return value != args[0];
        });
        return final;
    }
    else {
        let final2 = arr.filter(function(value){
            for (let i = 0; i < args.length; i++){
                return value != args[i];
            }
        });
        return final2;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
