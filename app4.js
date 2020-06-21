// ______________ CHAPTER # 35-38________________


// QUESTION:01
// Write a function that displays current date & time in your browser. 

var a = new Date();
alert (a)


// QUESTION:02
// Write a function that takes first & last name and then it greets the user using his full name. 


function person(){
 var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
fullName= firstName+ " "+ lastName
if(fullName){
    alert("It is good to meet you" + " " +fullName)
}

}
person();

// QUESTION:03
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function sum(){
    var num1= +prompt("Enter a number");
    var num2=+prompt("Enter another number");
    var num =num1+num2
    if(num){
        alert("The sum of these two numbers is" +" "+num)    }
}
sum();


// QUESTION:04
// Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser. 

var myMultiplier = function(num1, num2){
    return num1*num2
}
var result=myMultiplier(10,38)
document.write(result);


// QUESTION:05
// Write a function that squares its argument. 

var result=function(a){
    var num=a*a
    return num
}
var square=result(38)
document.write(square);


// QUESTION:06
// Write a function that computes factorial of a number. 

var factorial = function(n) {
    var answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
var n = 38;
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);


// QUESTION:07
// Write a function that take start and end number as inputs & display counting in your browser. 

function counting(firstNumber,lastNumber){
    var firstNumber=+prompt("Enter first number")
    var lastNumber=+prompt("Enter last number")
    var result=0;
   for(var i=firstNumber; i<lastNumber; i++){
       result= result+1;
   }
   return result;
}
var g=counting()
document.write(g)



// QUESTION:08
// Write a nested function that computes hypotenuse of a right angle triangle. 
//  Hypotenuse2 = Base2 + Perpendicular2 
//  Take base and perpendicular as inputs. Outer function :
//   calculateHypotenuse() Inner function: calculateSquare() 








 
 
// QUESTION:09
// Write a function that calculates the area of a rectangle.    
  A = width * height    
   Pass width and height in following manner: 
   i. Arguments as value ii. Arguments as variables 

i. Arguments as value
function area(width,height){
    alert(width*height)
}
area(5,5)

ii. Arguments as variables 

function area(width,height){
    var width=10;
    var height=5;
alert(width*height)
}
area();

 
// QUESTION:10
// Write a JavaScript function that checks whether a passed string is palindrome or not? 










// QUESTION:11
// Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];

  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));






// QUESTION:12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));


// QUESTION:13
// Write a JavaScript function that accepts two arguments,
//  a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));




// QUESTION:14
// The Geometrizer Create 2 functions that calculate properties of a circle, 
// using the definitions here. Create a function called calcCircumference:
//  • Pass the radius to the function. • Calculate the circumference based on the radius,
//   and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function.
//    • Calculate the area based on the radius, and output "The area is NN". 
 
Circumference of circle    =     2πr 
Area of circle       =     πr2 
 

 function calcCircumference(radius){
 pi=3.142;
 alert("The circumference is"+ " "+2*pi*radius)
 }
 calcCircumference(10)

 function calcArea(radius){
     pi=3.142;
     alert("The area is"+ " "+pi*(radius**2))
 }
 calcArea(38)
