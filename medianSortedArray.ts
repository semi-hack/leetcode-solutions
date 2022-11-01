function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let newArray = [];
    newArray = nums1.concat(nums2)
    
    let sortedArray = newArray.sort(function(a,b) { return a - b })
    let length = sortedArray.length

    if (length % 2 == 1) {
        let value = length/2 - 0.5
        return sortedArray[value]
    } else {
        let value = length/2
        let value2 = value - 1
        let a = sortedArray[value]
        let b = sortedArray[value2]
        let fresult = a + b
        let result = fresult/2
        return result
    }
};
