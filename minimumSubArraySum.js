/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
//     let start = 0;
//     let subArraySum = 0;
//     let minValue = Infinity;

//     for (let end = 0; end < nums.length; end++) {
//         subArraySum += nums[end];
//         while (subArraySum >= target) {
//             minValue = Math.min(minValue, end - start + 1)
//             subArraySum -= nums[start];
//             start++
//         }
//     }
//     return minValue === Infinity ? 0 : minValue;
// };

var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;

    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            let len = right - left + 1;
            if (result === 0 || len < result) result = len;
            sum -= nums[left];
            left++
        }
        right++
    }
    return result;
};