function lengthOfLongestSubstring(s: string): number {
    let maxlength = 0
    let start = 0
    const sofar = {}
    for(let end = 0; end < s.length; end++) {
        let right = s[end];
        sofar[right] = sofar[right] + 1 || 1;
        
        while(sofar[right] > 1) {
            let left = s[start]
            
            if(sofar[left] > 1) {
                sofar[left]--;
            }else{
                delete sofar[left];
            }
            
            start++
        }
        maxlength = Math.max(maxlength, (end - start) + 1)
    }
    
    return maxlength
};
