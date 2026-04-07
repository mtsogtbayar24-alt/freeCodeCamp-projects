class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let l = nums.length;
        let map = new Set();
        for(let i=0; i < l; i++){
            if(map.has(nums[i])){
                return true
            } map.add(nums[i]);
        } return false
    }
}