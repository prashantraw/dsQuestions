/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     // Brute force 

//     let n =  height.length;
//     let water = 0;
//     for(let i=0; i < n ; i++) {
//         let leftMax = 0, rightMax = 0;
//         let j = i;
//         while(j<n) {
//             rightMax = Math.max(rightMax, height[j]);
//             j++;
//         }
//         j = i;
//         while(j>=0) {
//             leftMax = Math.max(leftMax, height[j]);
//             j--;
//         }
//         j = i;
//         water += Math.min(leftMax, rightMax) - height[i]
//     }
//     return water
// };

// Optimized Solution

var trap = function(height) {
    let n = height.length;
    let left = 0, right = n - 1, leftMax = 0, rightMax = 0, water = 0;
    while(left<=right) {
        if(height[left] < height[right]) {
            if(height[left] > leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++
        } else {
            if(height[right] > rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}