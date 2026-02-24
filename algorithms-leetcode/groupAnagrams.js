// class solution {
//     groupAnagrams(strs) {
//         const map = new Map();
//         for (const str of strs) {
//             const sortedStr = str.split('').sort().join('');
//             if (!map.has(sortedStr)) {
//                 map.set(sortedStr, []);
//             }
//             map.get(sortedStr).push(str);
//         }
//         return Array.from(map.values());
//     }
// }

// // Example usage:
// const sol = new solution();
// const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(sol.groupAnagrams(input));
// // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};
    const aCharCode = 'a'.charCodeAt(0);

    for (const s of strs) {
      const count = new Array(26).fill(0);
      for (const ch of s) {
        count[ch.charCodeAt(0) - aCharCode] += 1;
      }
      const key = count.join(',');
      if (!res[key]) res[key] = [];
      res[key].push(s);
    }

    return Object.values(res);
  }
}
