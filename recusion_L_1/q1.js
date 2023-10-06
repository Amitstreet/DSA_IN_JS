const result=[];
const getallpath=(idx,arr)=>
 {

     if(idx === nums.length)
     {
         let narr=[...arr];
         result.push(narr);
         return ;
     }

        arr.push(nums[idx]);
       getallpath(idx+1,arr);
        arr.pop();
       getallpath(idx+1,arr);    
 }

        getallpath(0,[]);  
   
   return result;
