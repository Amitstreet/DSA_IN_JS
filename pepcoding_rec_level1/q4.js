
// quastion_link- https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/all-indices-official/ojquestion
    function allIndices(arr, x, idx, fsf) {
        if(idx == arr.length){
           let arr= new Array(fsf);

        
            return arr ;
        }
        
    let iarr;

        if(arr[idx] == x){
            iarr = allIndices(arr, x, idx + 1, fsf + 1);
            iarr[fsf] = idx;
        } else {
            iarr = allIndices(arr, x, idx + 1, fsf);
        }
        
        return iarr;
    }



     console.log(allIndices([3,3,3,3],3,0,0));

                        
                                
                                