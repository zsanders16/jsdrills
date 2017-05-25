//1.  Sum two numbers
function sumTwoNumbers (num1, num2){
  return num1 + num2;
}

//2.  Sum an array
function sumAnArray(array) {
  var total = 0;
  for (var i in array){
    total += array[i];
  }
  return total;
}

//3.  Fahrenheit to Celsius 
function ferToCel (fer) {
  return ((fer - 32) * 5 / 9);
}

//4.  Vowel Count
function countVowels (str){
  count = 0;
  for (var i=0; i<str.length; i++){
    switch (str.charAt(i)){
      case 'a':
      case 'e': 
      case 'i':
      case 'o':
      case 'u':
          count++;
          break;
    }
  }
  return count;
}

//5.  Dice
function rollDice(){
  function rollSingleDie() {
    return Math.floor(Math.random() * 6 + 1)
  }
  var results = []
  results.push(rollSingleDie())
  results.push(rollSingleDie())
  return results
}

//6.  Average of an array
function avgOfArray(array){
  function getSum(array){
    total = 0;
    for (var i in array){
      total += array[i]
    }
    return total;
  }
  return getSum(array)/array.length
}

//7.  Fizzbuzz
function fizzBuzz () {
  for (var i=1; i<101; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }else if (i % 3 === 0){
      console.log ("Fizz")
    }else if (i % 5 === 0){
      console.log ("Buzz")
    }else {
      console.log (i)
    }
  }
}

//8.  Factorial
function factorial(num) {
  if(num === 1){
    return 1
  }else{
    return num * factorial(num -1)
  }
}

//9.  Fibonacci
function fib(num) {
  if (num === 0){
    return 0;
  }else if (num === 1){
    return 1;
  }else{
    return fib(num - 2) + fib(num - 1)
  }
}

//Bonus: Roman Numeral Converter
function romanNumberConverter(str){
  var total = 0;
  var numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var numerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  for(var i=0; i<numerals.length; i++){
    while(str.indexOf(numerals[i]) === 0){
      total += numbers[i];
      str = str.replace(numerals[i],'')
    }
  }
  return total;
}



