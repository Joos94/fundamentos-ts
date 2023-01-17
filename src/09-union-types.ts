(()=>{
  let userId: string | number;
  userId = 123456;
  userId = 'qwerty';

  function greeting(myText: string | number) {
   if (typeof myText === 'string') {
     console.log(`string ${myText.toLowerCase()}`);
   } else {
     console.log(`number ${myText.toFixed(1)}`);
   }
  }
  greeting('Johan');
  greeting(16.36);
 })();
