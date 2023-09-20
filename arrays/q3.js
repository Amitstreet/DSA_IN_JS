
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array


//  this is less optmized code 
// we can use binery serch there to make it 0(nlogn)
let first_index=-1;
let second_index=-1;
let f=true;
let l=true;


 for(let i=0;i<nums.length;i++)
 {
     if(nums[i]==target && f==true)
     {
         first_index=i;
         f=false;
     }

     if(nums[i]==target && f==false)
     {
         second_index=i;
     }

 }

   let arr=[];
   if(first_index==-1 && second_index==-1)
   {
       arr.push(-1);
       arr.push(-1);
       return arr;
   }
   arr.push(first_index);
   arr.push(second_index);
   return arr;