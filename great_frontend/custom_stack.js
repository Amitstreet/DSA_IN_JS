   class stack{

  constructor()
  {
    this.item=[];
  }

  push(items)
  {

return this.item.push(items);
  }

  pop()
  {

    return this.item.pop();

  }

  peek()
  {


  }

   size()
   {


   }

   }


   const s= new stack();
   s.push(2);

  let m= s.pop();
  console.log(m);
   console.log(s)
