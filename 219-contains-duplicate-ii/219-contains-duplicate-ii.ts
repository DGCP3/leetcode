function containsNearbyDuplicate(nums: number[], k: number): boolean {
const map: any = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
      return true
    }
    map[nums[i]] = i
  }

  return false
}