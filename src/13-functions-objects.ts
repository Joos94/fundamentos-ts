(() => {
  type User = { email: string; password: string | number };

  const login = (user: User) => {
    console.log(user.email, user.password);
  };

  const userData = {
    email: "jaos@jaos.com",
    password: 123456,
  };

  login(userData);

  const products: any[] = [];
  //type Sizes = 'S' | 'M';

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: string //Sizes
  })=>{
    products.push(data);
  };

  addProduct({
    title: "P1",
    createAt: new Date(),
    stock: 200,
  });

  console.log(products);
})();
