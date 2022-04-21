"use strict";
exports.__esModule = true;
var twoSum = function (nums, target) {
    return nums.some(function (s) { return nums.includes(target - s); });
};
console.log(twoSum([2, 4, 5, 7, 8], 9));
