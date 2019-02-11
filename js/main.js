//comments single line
/* multiple lines comments */

//statements:
//window.alert('say message for screen popup');

//print or output info
//1. window.alert('Enter Your Name');
//2. document.write('What is your email?);
//3. prompt('Enter Your Email');
//4. confirm('Do you agree?');
//5. console.log('In console now');
//6. parseInt(prompt('Enter Your Age'));
//7. element.innerHTML;

//variables - storage location
// var variablename = 'Jenna';
// var text = 'Years old';
// //alert(text);
// document.write('variablename');

// //concatenation
// document.write('<h2> Hello' + variablename + '</h2>');

// var date = Date();
// document.write(date);

// var userColor = prompt('Enter Your Favorite Color');

// document.bgColor = userColor; //doesn't work with bootstrap

//Data types
//numbers, strings, booleans, objects, arrays
// var num = 12; 
// var txt = 'Jenna';
// var gaveOver = true//false;
// var student ={
//     Name:"Jenna",
//     Age:"2",
//     eyeColor:"blue",
// }
// var colors = ['green', 'red', 'black'];  //array

//functions - blocks of code used for specific purpose

// function functionname(){
//     //run function code in here
//     alert('Hi New User');
// }
//must call function here
// functionname();

// function doSomething(){
//     //document.getElementById('java').innerHTML = "New JavaScript For Class";
//     //var x = document.getElementById('java');
//     //x.style.color = "red";
//     //DOM - Document Object Model

//     document.querySelector('java').style.fontSize = "1em";
// }


//Events - actions or something that browser or user reacts to.
//click, load(background loader), mouseover, blur, change, mouseout, resize, keydown,  (use these to clal functions)

//EventListener
var x = document.querySelector('.btn');
x.addEventListener("click", function(){
    document.getElementById('java').style.color = "pink";
})