(()=>{
  //let myNumber: number = undefined;
  //let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let MyNumber: number | null = null;
  MyNumber =  12;

  let MyString: string | undefined = undefined;
  MyString =  'qwerty';

  function hi(name: string | null){
    let hello = 'Hola ';
    if(name){
      hello += name;
    }else{
      hello += 'nobody';
    }

    console.log(hello);
  }

  function hiv2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiv2('Andres');
  hiv2(null);

})();
