//https://leetcode.com/problems/maximum-subarray/


let cureent_max=nums[0];
let over_all_max=nums[0];
for(let i=1;i<nums.length;i++)
{
    let new_ele_2= nums[i]+cureent_max;
    if(new_ele_2<=nums[i])
     {
       cureent_max=nums[i];
     }
    else if(new_ele_2>=nums[i])
     {
      cureent_max=new_ele_2;
     }          
     if(over_all_max<=cureent_max)
     {
         over_all_max=cureent_max;
     }
}

return over_all_max;