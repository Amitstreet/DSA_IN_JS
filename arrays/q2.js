//link--https://leetcode.com/problems/rotate-array/


k=k%nums.length;
revrse(0,nums.length-k-1,nums);
revrse(nums.length-k,nums.length-1,nums);
revrse(0,nums.length-1,nums);
function revrse(i,j,arr)
{
     
     while(i<=j)
     {
         let temp=arr[j];
         arr[j]=arr[i];
         arr[i]=temp;
         i++;
         j--;
     }

}
return nums;