(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //Tipado especial para el objecto de productos
  type Product={
    title:string,
    createdAt:Date,
    stock:number;
    size?:Sizes
  };

  const products:Product[]=[];

  const addProduct=(data:Product) =>{
    products.push(data);
  }

  addProduct({
    title:"Pro1",
    createdAt:new Date(1993,1,1),
    stock:12
  });
  console.log(products);

  addProduct({
    title:"Pro2",
    createdAt:new Date(1993,1,1),
    stock:12,
    size:"XL"
  });

  console.log(products);

  products.push({
    title:"Prod3",
    createdAt:new Date(1992,1,1),
    stock:12,
    size:"XL"
  })

})();
