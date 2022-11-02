function isPalindrome(x: number): boolean {
    let snumber = x.toString();
    let split = snumber.split("")
    let reversedArray = split.reverse();
    let reversed = reversedArray.join("")

    if (reversed === snumber) {
        return true
    } else {
        return false
    }
};
