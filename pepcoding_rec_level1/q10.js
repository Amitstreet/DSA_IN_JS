        printSS("yvTA", "");

function printSS(ques,  ans){
        if(ques.length == 0){
        console.log(ans);
            return;
        }


        let ch = ques.charAt(0);
        let roq = ques.substring(1);
        printSS(roq, ans + ch);
        printSS(roq, ans + "");
    }


                        
                        