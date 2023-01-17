(()=>{
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    })

    return total.toString();
  }

  const printTotal = (prices: number[]): void => { //Funcion que no debe retornar nada
    const rta = calcTotal(prices);
    console.log(`Total ${rta}`);
  }

  const rta = calcTotal([1,2,3,4,5,6,7,5,3,45,43,5,3]);
  console.log(rta);

  printTotal([1,2,3,4,5,6,7])
})();
