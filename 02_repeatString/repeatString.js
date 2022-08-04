const repeatString = function(string, num) {
    let str = string;
    if (num < 0) return 'ERROR';
    else if (num == 0) return '';
    for (let i = 1; i < num; i++){
        str += string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
