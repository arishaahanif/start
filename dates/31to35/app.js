// QUES:1
// var a = new Date;
// console.log(a)

// QUES:2
// var a = new Date;
// var arr = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
// var month = a.getMonth();
// alert(arr[month])

// QUES:3
//  var a = new Date;
//  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var day = days[a.getDay()];
// for (var i = 0; i < days.length; i++){
//     if(day === "Sunday"){
//          var day2 = "fun"+day.slice(3);
//         alert("today is:"+day2)

//     }
//     if(day === "Saturday"){
//         var day2 = "fun"+day.slice(5);
//        alert("today is:"+day2)
// break;
//    }
//    else
//    alert("today is:"+day)
// break;
// }


// QUES:4
// var day = prompt("Enter a day")

// switch(day){
//     case 'Sat':
//         alert(' Its fun day')
//         break
//         case 'Sun':
//             alert('Its fun day')
// }
// QUES:5
// var currentDate = new Date()
// var todayDate = currentDate.getDate()
// if(todayDate < 16){
//     alert("first fifteen days of the month");
// }else{
//     alert("last days of the month")
// }
// QUES:6
// var a = new Date()
// a.setDate(1);
// a.setFullYear(1970);
// a.setMonth(0);
// var milliSecond = a.getMilliseconds();
// console.log(milliSecond)
// var min = a.getMinutes();
// console.log(min)
// console.log(a)

// QUES:7
// var a = new Date();
// console.log(a);
// var time = a.getTime();
// console.log(time)
// if(time > 23){
// console.log("Its PM")
// }else if(time < 23){
//     console.log("Its AM")
// }
// QUES:8
// var laterDate = new Date()
// laterDate.setDate(31);
// laterDate.setFullYear(2020);
// laterDate.setMonth(11);
// console.log (laterDate)

// QUES:9
// var date = new Date()
// var a = new Date()
// a.setDate(18);
// a.setFullYear(2015);
// a.setMonth(05);
// dayleft = date-a
// console.log(dayleft)

// QUES:12
// var newDate = new Date();
// var yearBack = new Date();
// var currentYear = newDate.getFullYear();
// currentYear=currentYear-100;
// yearBack.setFullYear(currentYear)
// alert("Current Date:"+newDate+"\n"+"100 years back,it was"+yearBack)






//  QUES:13
// var year = prompt("Enter your birth year")
// var a = new Date()
// var current = a.getFullYear()
// var birth = current-year
// console.log(birth)


// QUES:14
// var customerName = "Ruba"
// var currentMonth = "February"
// var Numberofunits ="410"
// var Chargesperunit = "16"
// var Netamountpayable = Numberofunits * Chargesperunit
// alert(Netamountpayable)
// var Latepaymentsurcharge = "350"
//  var GrossAmountPayable = Netamountpayable+ Latepaymentsurcharge
//  alert(GrossAmountPayable)






