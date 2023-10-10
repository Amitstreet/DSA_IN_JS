
        let paths = getStairPaths(3);
    console.log(paths);

function  getStairPaths(n) {
        if(n <= 0){
            let  bres =[]

            if(n == 0){
                bres.push("");
            }

            return bres;
        }
    
        let rres1 = getStairPaths(n - 1);
        let rres2 = getStairPaths(n - 2);
        let rres3 = getStairPaths(n - 3);
        let mres = [];

         for(let i=0;i<rres1.length;i++)
         {
            mres.push(1+rres1[i]);
         }
        
         for(let i=0;i<rres2.length;i++)
         {
            mres.push(2+rres2[i]);
         }
        
         for(let i=0;i<rres3.length;i++)
         {
            mres.push(3+rres3[i]);
         }
        

        return mres;
    }



                        
                                