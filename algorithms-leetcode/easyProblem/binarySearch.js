class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] < target) {
                left = mid + 1;
            }
            if (nums[mid] > target) {
                right = mid - 1;
            }
        }
        return -1;
    }
}
// --- Test Setup Below ---
const sol = new Solution();

// Test Case 1: Target is in the array (Should return 3)
const result1 = sol.search([-1, 0, 2, 4, 6, 8], 4);
console.log(`Test 1: Target 4 -> Expected: 3, Got: ${result1}`);

// Test Case 2: Target is NOT in the array (Should return -1)
const result2 = sol.search([-1, 0, 2, 4, 6, 8], 3);
console.log(`Test 2: Target 3 -> Expected: -1, Got: ${result2}`);

// Test Case 3: Target is the first element (Should return 0)
const result3 = sol.search([5, 10, 15, 20], 5);
console.log(`Test 3: Target 5 -> Expected: 0, Got: ${result3}`);
