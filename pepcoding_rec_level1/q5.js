

   
        let ss = gss("cba");
        console.log(ss);
    

    function gss(str) {
        if(str.length == 0){
            let bres=[];
            bres.unshift("");
            return bres;
        }

        let ch = str.charAt(0); 
        let ros = str.substring(1);

        let rres = gss(ros);
        let mres = [];

        for(let i=0;i<rres.length;i++)
        {
            mres.unshift(rres[i]);
        }


        for(let i=0;i<rres.length;i++)
        {
            mres.unshift(rres[i]+ch);
        }


        return mres;
    }



                        


                        


                        


                        


                        


                        


                        


                        


                        


                        
                                