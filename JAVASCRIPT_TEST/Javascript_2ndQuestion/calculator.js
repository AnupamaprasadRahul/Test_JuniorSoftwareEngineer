
class Calculator{

 add(num1,num2)
 {
    return num1+num2;
 }

 subtract(num1,num2)
 {
    return num1-num2;
 }
 multiply(num1,num2)
 {
    return num1*num2;
 }
 divide(num1,num2)
 { if(num2!==0){
    return num1/num2;}
    else {
        throw new Error("Undefined");
    }
 }

}


const calculate= new Calculator();

const add = calculate.add(2,4);
console.log(`Sum of 2 and 4 is ${add}`);

const subtract = calculate.subtract(7,4);
console.log(`Subtraction of 7 from 4 is ${difference}`);

const multiply = calculate.multiply(2,4);
console.log(`Multiplication of 4 and 8 is ${add}`);

const divide = calculate.divide(2,4);
console.log(`Division of 20  by 4 is ${add}`);