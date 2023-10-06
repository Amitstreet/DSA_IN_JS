
// qustion_lnk--https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/first-index-official/ojquestion
   function  firstIndex( arr,  idx, x) {
      if(idx == arr.length){
         return -1;
      }

      if(arr[idx] == x){
         return idx;
      } else {
         let fiisa = firstIndex(arr, idx + 1, x);
         return fiisa;
      }
   }

     let f_index= firstIndex([2,3,4,5,5],0,5);
     console.log(f_index);



                        


                        
                                