/*
 El reto de FizzBuzz generalmente consiste en crear una función que devuelva:

"Fizz" si el número es múltiplo de 3,
"Buzz" si el número es múltiplo de 5,
"FizzBuzz" si es múltiplo de ambos (3 y 5),
El número mismo si no es múltiplo de ninguno.

*/

 /*const fizzbuzz = (num)=>{

  if(num === 0 ){
    return 0
  }
  if(num % 3 === 0 && num % 5 === 0){
    return "fizzbuzz";
   }
  if(num % 3 === 0 ){
  return 'fizz'
  }
  if(num % 5 === 0 ){
    return 'buzz'
    }
  return num
}

const print = (num)=> {
  for (let i = 0; i <= num; i++) {
    console.log(fizzbuzz(i))
    }
}
print(16)

module.exports = fizzbuzz*/



//refactorizar el código

const fizzbuzz = (num)=>{

  if(typeof num !== 'number'){
    return 'Error: the argument must be a number'
  }

  const divisible = (divisor, num) =>num % divisor === 0

  if(num === 0 ){
    return 0
  }
  if(divisible(3, num) && divisible(5, num)){
    return "fizzbuzz";
   }
  if(divisible(3, num)){
  return 'fizz'
  }
  if(divisible(5, num)){
    return 'buzz'
    }
  return num
}

const print = (num)=> {
  for (let i = 0; i <= num; i++) {
    console.log(fizzbuzz(i))
    }
}
print('30')

module.exports = fizzbuzz