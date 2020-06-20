// Assignment # 21-25
// JAVASCRIPT




// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



let firstName = prompt("Enter your first Name");

let lastName = prompt("Enter your last name is");

let fullName = `Full name is ${firstName}  ${lastName}  welcome`;

alert(fullName);






// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


let favoriteMobile = prompt("Enter your Favorite Mobile")

let a = favoriteMobile.length;
let mobile = ` 
My favorite phone is : ${favoriteMobile} 

<br>

Length of string : ${a}

`;

document.write(mobile);





// 3. Write a program to find the index of letter “n" in the word
// “Pakistani" and display the result in your browser

let str = "Pakistani";

let search = str.indexOf("n",)

let p = `

<h2>
String : ${str}

<br>

Index of 'n' : ${search}

</h2>


`;
document.write(p);




// 4. Write a program to find the last index of letter “l" in the
// word “Hello World" and display the result in your browser .


let hi = "Hello World";

let lastindex = hi.lastIndexOf("l");


document.write(`



<h4>
String : ${hi}

<br>
Last index of "l" : ${lastindex}

</h4>


`);


// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani" and display the result in your browser .


let str1 = "Pakistani";

b = str1.charAt(3);

document.write(`

<h4>
String : ${str1}

<br>
Character at index 3  : ${b}

</h4>

`);



// 6. Repeat Q1 using string concat() method.



// firstName and lastname aleardy defined in 1st task



let fName = "Sheikh Sami";

let lName = "Ahmed";

let name = fName.concat(lName);
document.write(`
   full name using concat method

   <br>

   full name : ${name}


`);



// 7. Write a program to replace the “Hyder" to “Islam" in the
// word “Hyderabad" and display the result in your browser.



let city = "Hyderabad";

let afterReplace = city.replace("Hyder", "Islam")

document.write(`

<h2>

City : ${city}
<br>

After Replacement : ${afterReplace}
</h2>


`);



// 8. Write a program to replace all occurrences of “and" in the
// string with “&" and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.";



var message = "Ali and Sami are best friends. They play cricket and football together .";

var r = message.replace(/and/g, "&");
document.write(`

<h5>

Original Message : ${message}
<br>

After Replacement : ${r}
</h5>


`);




// 9. Write a program that converts a string “472" to a number
// 472. Display the values & types in your browser.


var v1 = 472;

document.write(`

Value : ${v1}
<br>
Type : ${typeof v1}


<br>
`)

// Now convert to string


s1 = String(v1)

document.write(`

    Value : ${s1}
    <br>

Type : ${typeof s1}
    
`)





// 10. Write a program that takes user input. Convert and
// show the input in capital letters.



const inp = prompt("Enter a input", "like peanuts");

const upper = inp.toUpperCase();

document.write(`
<h4>

User input :${inp}

<br>

Upper Case : ${upper}

</h4>
`);


// 11.
// Write a program that takes user input. Convert and
// show the input in title case.


var text = prompt("Enter a Programming language");


var title = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
document.write(`


 User input :${text}

 <br>
 
 Upper Case : ${title}
 
 </h4>
`)



// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536" display in your browser.



var num = 35.36;
var without = num.toString().replace(".", "");
document.write(`
<h4>
Number :${num}

<br>

Result:  ${without}

</h4>
`)


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// let username=prompt("Enter a username");

// let a = /^[0-9A-Za-z]+$/;

//  if (username.mathes(a)){
//      confirm("success");
//  }
//  else{
//      confirm("please enter a valid username")
//  }






//  14. You have an array
// A = [cake", “apple pie", “cookie", “chips", “patties"]
// Write a program to enable “search by user input" in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



let A = ["cake", "apple pie", "cookie", "chips", "patties"];


confirm(`

Welcome to ABC bakery. What do you want to order sir/ma'am?

 ${ searchIndex = prompt("")}

`);

let found= false;

for (var i = 0; i < A.length; i++) {

    if (A[i] === searchIndex.toLowerCase()) {

        document.write(`
        
        ${A[i]} is <b> available </b> at index ${i} in our bakery

        `)

        found = true;
        break;

    }
}

if (!found) {
    document.write(`
         
        We are sorry. ${searchIndex} is <b> not available </b> in our bakery
        <br>

        `)
}


// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.





// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = 'University of Karachi';
var arr= Array.from(university);

for (var i = 0; i < arr.length; i++) {

    document.write(` <b> ${arr[i]} <br>`);
}




// 17. Write a program to display the last character of a user
// input.


let txt= "Pakistan";


let end=txt.substring(7)
document.write(`



<h4>
User input: ${txt}
    <br>

    Last character of input : ${end}

</h4>


`);



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }

    document.write(`
    <h4>

    Text : The quick brown fox jumps over the lazy dog
    <br>

    </h4> There are ${count("The quick brown fox jumps over the lazy dog", 'the')}
    occurance(s) of the word 'the'

    `)



