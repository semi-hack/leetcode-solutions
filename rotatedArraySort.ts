function search(nums: number[], target: number): number {
     const exist = nums.includes(target)
         if(exist) {
        return nums.indexOf(target)
    } else {
        return -1
    }
};
