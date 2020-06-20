// Assignment # 31-34
// JAVASCRIPT

// DATE METHODS


// 1. Write a program that displays current date and time in
// your browser.
let date = new Date();

document.write(`
<h3>
${date}

</>
`)


// 2. Write a program that alerts the current month in words.
// For example December.

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.write(`
<h3>

Current Month : 
${months[date.getMonth()]}

</>`);



// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


var Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
document.write(`
<h3>

Current Day : 
${Day[date.getDay()]}

</>`);




// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today


var Day1 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var d = Day1[date.getDay()]

if (d == "Sun" || d == "Sat") {
    document.write(`

    <h3>
    Its Fun day

    </h3>

    `)
}
else {
    document.write(`

    <h3>
    Its  not a Fun day

    </h3>

    `)

}


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.


let c = date.getDate();

if (c < 16) {
    document.write(`

    <h3>
    First fifteen days of month

    </h3>

    `);

}
else if (c > 16) {
    document.write(`
    <h3>
    Last fifteen days of month

    </h3>

    `);

};



// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var d1= new Date("January 1 1970 18:29:25");
// var d2=d1.getTime();
document.write(`

Current Date: ${date}
<br>


Elapsed millisecond since january 1, 1970 : ${d1.getTime()}
<br>

Elapsed minutes since january 1, 1970: ${d1.getTime()/(1000*60)}



`)



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var hours = new Date().getHours();
var hours = (hours+24-2)%24; 
var mid='AM';
if(hours==0){ //At 00 hours we need to show 12 am
hours=12;
}
else if(hours>12)
{
hours=hours%12;
mid='PM';
}
// alert ('Toronto time: ' + hours + mid);

document.write(`

<h3>
Its ${mid}

</h3>

`);


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate= new Date("dec 31 2020")

document.write(`
  
Later date: ${laterDate}
`)


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015


var d2= new Date("june 18 2015");

var d3= new Date("june 19 2020");

var diffTime= d2.getTime()-d3.getTime();

var days= diffTime / (1000*60*60*24);

document.write(`
<h4>

${days} day have passed since 1st Ramadan, 2015 to 2020

</h4>

`)


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var d4= new Date("jan 1 2015 00:00:00");

var d5= new Date("dec 5 2015 22:50:16 ");

var Timediff= d5.getTime()-d4.getTime();
var seconds= diffTime /(1000*60);


document.write(`
<h4>

on refernce date ${d5}, 
<br>

${seconds} seconds had passed away since begining of 2015

</h4>

`)



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

