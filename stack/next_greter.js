

    let arr= [1,3,6,8,2,4,5];
    const findnext=(arr)=>
    {

      let stack=[];
      
      let nge= new Array(arr.length);
      nge[arr.length-1]=arr.length;
      stack.push(arr.length-1);
      let n= arr.length;

      for(let i=n-2;i>=0;i--)
      {
           
        while(stack.length>0 && arr[i] >= arr[stack[stack.length-1]])
        {
             stack.pop();
        }

        if(stack.length==0)
        {
            nge[i]=arr.length;
        }
        else
        {
            nge[i]= stack[stack.length-1];
        }

        stack.push(i);

      }

      return nge;


    }

   let arr_1= findnext(arr);

   console.log(arr_1);



 