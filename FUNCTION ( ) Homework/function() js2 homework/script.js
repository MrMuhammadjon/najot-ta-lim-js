let input1 = document.getElementById("display1")
let input2 = document.getElementById("display2");
let input3 = document.getElementById("display3");
let input4 = document.getElementById("display4");



function appendToDisplay(operator) {
   input3.value = operator
}


function calculateResult() {

   switch (input3.value) {
      case '*':
         let increase = Number(input1.value) * Number(input2.value)
         input4.value = increase
         console.log(increase);
         
         break;
      case '/':
         let ToBe = Number(input1.value) * Number(input2.value)
         input4.value = ToBe
         break;
      case '+':
         let plus = Number(input1.value) + Number(input2.value)
         input4.value = plus
         break;
      case '-':
         let minus = Number(input1.value) -Number(input2.value)
         input4.value = minus
         break
      default:
         break;
   }
}

function clearDisplay() {
   input1.value = ""
   input2.value = ""
   input3.value = ""
   input4.value = ""
}