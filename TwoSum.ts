function twoSum(nums: number[], target: number): number[] {
    let solution = {}
    for(let i=0; i<nums.length; i++) {
        let value = target - nums[i]
        if (solution[value] !== undefined) {
            return [solution[value], i]
        }
        solution[nums[i]] = i
}
};
