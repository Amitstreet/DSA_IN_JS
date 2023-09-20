// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array


let first_largest= -1;
let second_largest=-1;

for(let i=0;i<nums.length;i++)
{
     if(first_largest<=nums[i])
      {
        second_largest=first_largest;
        first_largest=nums[i];
       }
   
      else  if(second_largest<nums[i])
        {
           second_largest=nums[i];
        }

    
}

 return (first_largest-1)*(second_largest-1);