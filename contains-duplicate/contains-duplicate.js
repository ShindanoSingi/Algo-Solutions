/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    length1 = nums.length;
    let numsSet1 = new Set([...nums]);
    let numsSet = Array.from(numsSet1);
    length2 = numsSet.length;
    if (length1 === length2){
        return false
    }
    return true
};