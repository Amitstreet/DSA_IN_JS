
var sortColors = function(nums) {
    

    let low=0;
    let mid=0;
    let high=nums.length-1;

const swap=(nums,mid,low)=>{
       let s= nums[mid];
       nums[mid]=nums[low];
       nums[low]=s;
    }

    while(mid<=high)
    {
          
          if(nums[mid]==0)
          {
              swap(nums,mid,low);
              mid++;
              low++;
          }

          else if(nums[mid]==1)
          {
            mid++;
          }

          else 
          {
              swap(nums,mid,high)
              high--;
          }
    }


   return nums ;


};