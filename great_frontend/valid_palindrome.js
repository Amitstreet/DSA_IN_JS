var isPalindrome = function(s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
       console.log(cleanedString);
   // Step 2: Check if it's a palindrome
   return cleanedString === cleanedString.split('').reverse().join('');
};

