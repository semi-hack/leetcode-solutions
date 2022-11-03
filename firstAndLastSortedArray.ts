function searchRange(nums: number[], target: number): number[] {
    const result = []
    for(let i = 0; i < nums.length; i++) {
       if (nums[i] === target) {
        result.push(i)
      }
    }
    const exist = nums.includes(target)
    if (exist && result.length == 1) {
      result.push(result[0])
    }

    const finalresult = [result[0], result[result.length -1]]

    if(exist) {
      return finalresult
    } else {
        return [-1, -1]
    }
};
