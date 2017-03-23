// document.addEventListener('DOMContentLoaded',function() {
//   //put all the code inside here owo
// })
//
//
// function list(arr) {
//   var output = ''
//   arr = Array.from(arr)
//   console.log(arr[0], arr[0].textContent)
//
//   if (arr.length === 0) {return ''}
//   newArr = []
//   arr.forEach(function (i) {
//     newArr.push(Object.values(i))
//   })
//   newArr = newArr.reduce(function(a,b) {
//       return a.concat(b)
//     })
//   if (newArr.length === 1)  {return newArr.toString()}
//   var last = newArr.pop()
//   return newArr.join(', ') + " & " + last
// }
//
// function buttonClick()
//   alert('button is clicked')
//   //list out all the names by the li
//   var allNames = document.querySelectorAll('.list-item')
//
// }
//
// function printAllNames () {
//   var allNames = document.querySelectorAll('.list-item')
//   var output = list(allNames)
//   document.querySelector('h1').textContent = output
//   list()
// }
//
// var button = document.querySelector('button')
// button.addEventListener('click', buttonClick)


document.addEventListener('DOMContentLoaded',function() {
  function calculate(num1,num2,op) {
    var num1 = document.getElementById("firstNum").value;
    var num2 = document.getElementById("secondNum").value;
    var op = document.getElementById("operator").value;
    var operators = ['*','+','-','/']
    if (operators.includes(op)===false) {
      alert("Invalid operator")
    }
    var num1str = num1.toString()
    var num2str = num2.toString()
    var stringToCalc = num1str + op + num2str //"2+4"
    document.getElementById('result').innerHTML = eval(stringToCalc)
    console.log(eval(stringToCalc))
  }

  var button = document.querySelector('button')
  button.addEventListener('click', calculate)





















})
