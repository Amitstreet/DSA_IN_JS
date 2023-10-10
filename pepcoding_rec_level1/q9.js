
    
        let paths1 = getMazePaths(0, 0, 1, 1);
         console.log(paths1)    

    function getMazePaths(sr,sc, dr,dc) {
        if(sr > dr || sc > dc){
            let s=[];
            return s;
        }

        if(sr == dr && sc == dc){
            let bres = []
            bres.push("");
            return bres;
        }

        let  paths = [];
        for(let move = 1; move <= dc - sc; move++){
            let hpaths = getMazePaths(sr, sc + move, dr, dc);
            for(let i=0;i<hpaths.length;i++)
            {
                paths.push("h" + move + hpaths[i]);
            }
        }
        
        for(let move = 1; move <= dr - sr; move++){
            let vpaths = getMazePaths(sr + move, sc, dr, dc);
            for(let j=0;j<vpaths.length;j++)
            {
                paths.push("v" + move + vpaths[j]);
            }
        }

        for(let move = 1; move <= dc - sc && move <= dr - sr; move++){
          let dpaths = getMazePaths(sr + move, sc + move, dr, dc);
          for(let j=0;j<dpaths.length;j++)
          {
              paths.push("d" + move + dpaths[j]);
          }
        }

        return paths;
    }



                        
                                