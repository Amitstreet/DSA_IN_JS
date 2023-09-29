// link-https://www.interviewbit.com/problems/array-sum

let carry = 0;
let sum =0;
let ans = [];
let i = A.length -1;
let j = B.length -1;
while(i >=0 && j>=0){
    sum = Number(A[i])+Number(B[j])+ carry
    ans.push(sum%10);
    carry = Math.floor(sum/10);
  
    i--;
    j--;
}
while(i>=0){
    sum = Number(A[i])+ carry;
    ans.push(sum%10);
    carry = Math.floor(sum/10);
    i--;
}
 while(j>=0){
    sum = Number(B[j])+ carry;
    ans.push(sum%10);
    carry = Math.floor(sum/10);
    j--;
}
if(carry > 0){
    ans.push(carry);
}
return ans.reverse()

