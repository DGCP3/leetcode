/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    let res = [];
    let dfs = (start, path) => {
        res.push(path);
        for (let i = start; i < nums.length; i++) {
            dfs(i + 1, path.concat(nums[i]));
        }
    }
    dfs(0, []);
    return res.sort((a,b) => a.length - b.length);
}