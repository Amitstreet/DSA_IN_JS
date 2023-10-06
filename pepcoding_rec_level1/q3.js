


// Quastion_link-https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/last-index-official/ojquestion
   function lastIndex(arr, idx, x) {
      if(idx == arr.length){
         return -1;
      }

      let liisa = lastIndex(arr, idx + 1, x);
      if(liisa != -1){
         return liisa;
      } else if(arr[idx] == x){
         return idx;
      } else {
         return -1;
      }
   }

   
   let l_index= lastIndex([2,3,4,5,5],0,5);
   console.log(l_index);





                        


                        


                        


                        
                                