var isAnagram = function(s, t) {
    

    if (s.length !== t.length) {
       return false;
   }

   // Step 2: Sort the characters in both strings and compare
   const sortedS = s.split('').sort().join('');
   const sortedT = t.split('').sort().join('');

   return sortedS === sortedT;
};


var isAnagram = function(s, t) {
    // Step 1: Check if the lengths are different
    if (s.length !== t.length) {
        return false;
    }

    // Step 2: Use Set to keep track of unique characters in string s
    const charSet = new Set();

    // Add characters from string s to the set
    for (let char of s) {
        charSet.add(char);
    }

    // Step 3: Check if all characters in string t exist in the set
    for (let char of t) {
        if (!charSet.has(char)) {
            // If the character doesn't exist in string s, it's not an anagram
            return false;
        }
    }

    return true;
};