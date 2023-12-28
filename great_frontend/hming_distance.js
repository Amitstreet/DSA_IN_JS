function hammingDistance(x, y) {
    // XOR gives a number with set bits at positions where bits are different
    let xorResult = x ^ y;
    console.log(xorResult);
    
    // Convert XOR result to binary and count the number of '1' bits
    let binaryString = xorResult.toString(2);
    let hammingDistance = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            hammingDistance++;
        }
    }

    return hammingDistance;
}

// Example usage
let result = hammingDistance(4, 1);
console.log(result);
