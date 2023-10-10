
 
    let words = getKPC("34");
    console.log(words);
    function getKPC(str) {
        let codes  = [".;", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tu", "vwx", "yz"]

        if(str.length == 0){
            let bres = []
            bres.unshift("");
            return bres;
        }

        let ch = str.charAt(0);
        let ros = str.substring(1);

        let rres = getKPC(ros);
        let mres = [];
        let ch_1 = parseInt(ch);
        let narr=codes[ch_1].split("");
        for(let i=0 ; i<narr.length ;i++){
            for(let j=0; j<rres.length; j++){
                mres.unshift(rres[j] +narr[i]);
            }
        }

        return mres;
    }


                        
                                