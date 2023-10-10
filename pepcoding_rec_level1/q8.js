
        let paths = getMazePaths(0, 0,1,1);
         console.log(paths);

    function getMazePaths(sr,  sc,  dr,  dc) {
        if(sr > dr || sc > dc){
            let m=[]
            return m;
        }

        if(sr == dr && sc == dc){
            let bres = []
            bres.push("");
            return bres;
        }

        let hpaths = getMazePaths(sr, sc + 1, dr, dc);
        let  vpaths = getMazePaths(sr + 1, sc, dr, dc);
        let  paths = [];

        for(let i=0;i<hpaths.length;i++)
         {
            paths.push("h"+hpaths[i]);
         }


         for(let i=0;i<vpaths.length;i++)
         {
            paths.push("v"+vpaths[i]);
         }


        return paths;
    }


                        
                        
                        
                        
                        
                                