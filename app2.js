// Assignment # 26-30
// JAVASCRIPT


// MATH METHODS | JAVASCRIPT


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



const int= +prompt("enter a positive integres");

document.write(`
<h4>

Number: ${int}
    <br>

Round off value: ${Math.round(int)}
    <br>
floor value:  ${Math.floor(int)}

    <br>
Ceil value: ${Math.ceil(int)}

</h4>

<br>

`);



// <!-- 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number -->


const a= parseFloat(prompt("Enter a negative floating point"));


document.write(`
<h4>

Number: ${a}
    <br>

Round off value: ${Math.round(a)}
    <br>
floor value:  ${Math.floor(a)}

    <br>
Ceil value: ${Math.ceil(a)}

</h4>

<br>

`);




// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

const abso= +prompt("Enter a value to display absolute value");
document.write(`

<h4>
    The absolute value of ${abso} is ${Math.abs(abso)}
</h4>

`)


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:



var num= Math.random();
var num1= (num*6)+1;

var dice= Math.floor(num1);


document.write(`

<h4>
random dice value  ${dice}:
<br>

`)

document.write(`

<h4>
random dice value  ${dice}:
<br>
<br>
<br>

`)


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browse



var coin= Math.random();
var coin1= (coin*2)+1;

var coin2= Math.floor(coin1);
 if (coin2===2){
     document.write(`
     ${coin2}
     <br>
     Random coin value: Heads

     `)
 
 }
 else{
    document.write(`
    ${coin2}
    <br>
    Random coin value: Tails

    `)
 }



//  6. Write a program that shows a random number between 1
// and 100 in your browser.



var ran= (100 * Math.random()+1);

ran1=Math.floor(ran);

document.write(`

<h4>
random number between 1 and 100 : ${ran1}
</h4>

`)


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:


let input= prompt("Enter your weight");


document.write(`
<h3>
The weight of user is ${input} 

</h3>

`)



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.





 // random value generated 
 var y = Math.floor(Math.random() * 10 + 1); 
      
 // counting the number of guesses 
 // made for correct Guess 
 var guess = 1; 

 var x= prompt("Enter a number between 1 to 10")
   

if(x == y) 
{     
    confirm("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS "); 
} 
else if(x > y) /* if guessed number is greater 
                than actual number*/ 
{     
    guess++; 
    confirm("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
    guess++; 
    confirm("OOPS SORRY!! TRY A GREATER NUMBER") 
} 






// ................................the end ...........................