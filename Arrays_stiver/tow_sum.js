
// map_method

var twoSum = function(nums, target) {
    const nums_map = new Map();
    let arr=[];
    for(let i=0;i<nums.length;i++)
    {
        nums_map.set(nums[i],i);
    }
    console.log(nums_map);
    for(let i=0;i<nums.length;i++)
    {
        let rem= target-nums[i];
        if(nums_map.has(rem) && nums_map.get(rem)!=i)
        {
         arr.push(i);
        let index= nums_map.get(rem);
        arr.push(index);
         break;
        }   
    }
    return arr;
};



