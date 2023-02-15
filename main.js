let mark1 = Number(prompt("Enter mark-1"));
let mark2 = Number(prompt("Enter mark-2"));
let mark3 = Number(prompt("Enter mark-3"));
let mark4 = Number(prompt("Enter mark-4"));
let mark5 = Number(prompt("Enter mark-5"));

let total = mark1 + mark2 + mark3 + mark4 + mark5;

let avg = total/5;

if(avg >= 95 && avg <= 100){
      document.write("grade-A+");
}
else if(avg >=80 && avg<95){
      document.write("grade-A");
}
else if(avg >=60 && avg<80){
      document.write("grade-B");
}
else if(avg>=40 && avg<60){
     document.write("grade-C");
}
else{
     document.write("grade-D");
}