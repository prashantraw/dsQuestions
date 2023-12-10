var firstUniqChar = function(s) {
    for (let idx = 0; idx < s.length; idx++){
        // If same...
        if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
            // return the index of that unique character
            return idx
        } else {
            return -1       // If no character appeared exactly once...
        }
    }
};