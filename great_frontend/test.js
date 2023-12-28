let isActiveValue=true;
let s=[
    'tabs-list-item',
    isActiveValue && 'tabs-list-item--active',
  ]

    .filter(Boolean).join(" ")
    

    console.log(s);

