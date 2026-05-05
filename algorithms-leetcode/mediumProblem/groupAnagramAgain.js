/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let groups = {};
  for( let s of strs){
    let key = s.split('').sort().join('');
    if(!groups[key]){
      groups[key] = [];
    }
    groups[key].push(s);
  }
  return Object.values(groups);
};