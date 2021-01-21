// QUES:1

// function exp(a,b)
// {
//         var ans = 1;
//         for (var i =1; i <= b; i++)
//         {
//                 ans = a * ans;        
//         }
//         return ans;
// }
// console.log(exp(2, 3));

// QUES:2
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2012));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(2020));

// QUES:3

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);

// QUES:04
// function mainfunction(){ 
//     let firstSubjectmarks = prompt('Enter first subject marks:');
//     let secoundSubjectmarks = prompt('Enter secound subject marks:');
//     let thirdSubjectmarks = prompt('Enter third subject marks:');
// var avg = Average(firstSubjectmarks,secoundSubjectmarks,thirdSubjectmarks);
// alert("The average of the marks is:"+avg)
// var total = 100;
// percentage(total,firstSubjectmarks,secoundSubjectmarks,thirdSubjectmarks)
// }
// function Average(firstSubjectmarks,secoundSubjectmarks,thirdSubjectmarks)
// {
// var avg =(firstSubjectmarks+secoundSubjectmarks+thirdSubjectmarks);
// return avg;
// }
// function percentage(total,firstSubjectmarks,secoundSubjectmarks,thirdSubjectmarks)
// {
//     var firstSubjectPercent = (firstSubjectmarks/total)*100;
//     var secoundSubjectPercent = (secoundSubjectmarks/total)*100;
//     var thirdSubjectPercent = (thirdSubjectmarks/total)*100;
//     alert("The percentage of first subject is:"+firstSubjectPercent);
//     alert("The percentage of secound subject is:"+secoundSubjectPercent);
//     alert("The percentage of third subject is:"+thirdSubjectPercent);
// }
// mainfunction()
// QUES:6
// var originalSentence = prompt("Enter the sentence:")
// var sentence = removeVowels(originalSentence);
// alert(sentence);
// function removeVowels(sentence){
//     sentence = sentence.replace(/[aeiou]/g,'')
//     return sentence;
// }








