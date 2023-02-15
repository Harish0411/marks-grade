let mark1 = Number(prompt("Enter mark-1"));
let mark2 = Number(prompt("Enter mark-2"));
let mark3 = Number(prompt("Enter mark-3"));
let mark4 = Number(prompt("Enter mark-4"));
let mark5 = Number(prompt("Enter mark-5"));

let total = mark1 + mark2 + mark3 + mark4 + mark5;

let avg = total/5;

document.write(`Your total mark out of 500 is ${total}. <br>`)

document.write(`Your average mark is ${avg} <br>`); 


if(avg >= 95 && avg <= 100){
      document.write("Your grade is A+");
}
else if(avg >=80 && avg<95){
      document.write("Your grade is A");
}
else if(avg >=60 && avg<80){
      document.write("Your grade is B");
}
else if(avg>=40 && avg<60){
     document.write("Your grade is C");
}
else{
     document.write("Your grade is D");
}