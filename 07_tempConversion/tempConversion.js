const ftoc = function(temp) {
    let num = (5/9)* (temp - 32);
    return Math.round(num * 10) / 10;
};

const ctof = function(temp) {
    let num = (temp * 1.8) + 32;
    return Math.round(num * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
