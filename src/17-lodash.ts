//var _  = required('lodash'); JS
import _ from 'lodash';//Libreria in soporte TS

const data = [
  {
    username: 'andres',
    role: 'admin'
  },
  {
    username: 'johan',
    role: 'seller'
  },
  {
    username: 'lix',
    role: 'seller'
  },
  {
    username: 'lex',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
