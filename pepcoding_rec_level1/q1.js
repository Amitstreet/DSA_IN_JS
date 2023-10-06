


// video soltion 
// Qustion link-https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/max-of-an-array-official/ojquestion

   function maxOfArray(arr, idx) {
      if(idx == arr.length - 1){
         return arr[idx];
      }
      
      let misa = maxOfArray(arr, idx + 1);
      if(misa > arr[idx]){
         return misa;
      } else {
         return arr[idx];
      }
   }

  let max= maxOfArray([1,2,3,4],0);
  console.log(max);


                        


                        
                                