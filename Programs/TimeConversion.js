/* 
    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

    Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
    Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description : 
Complete the timeConversion function in the editor below. It should return a new string representing 
the input time in 24 hour format.
timeConversion has the following parameter(s):
s: a string representing time in 12 hour format

Input Format :
A single string s containing a time in 12-hour clock format (i.e.:hh:mm:ss:AM  or hh:mm:ssPM), where 
0<=hh<=12 and 00<=mm,ss<=59.

Constraints :
All input times are valid

Output Format :
Convert and print the given time in 24-hour format, where 00<=hh<=23.

Sample Input 0
07:05:45PM

Sample Output 0
19:05:45
*/

function timeConversion(s) {
    // method 1 if 07:05:45PM if input doesnt have space in PM and number
    let sampleDate = new Date('1/1/2013 '+ s);
    console.log(sampleDate.getHours() + ':' + sampleDate.getMinutes() +':'+ sampleDate.getSeconds());

    // method 2 if having space
    let data = s.split(':');
    let hours = Number(data[0]);
    let min = Number(data[1]);
    let Sec = Number(data[2].slice(0,2));
    let format = data[2].slice(-2);
    if(hours < 12 && format == 'PM')
        hours = hours + 12;
    if(hours == 12 && format == 'AM')
        hours = hours - 12;

    if(min < 10) min = '0' + min;
    if(hours < 10) hours = '0' + hours;
    if(Sec < 10) Sec = '0' + Sec;
    return (hours + ':' + min + ':' + Sec);
}

function getLastSting(string){
    return string.slice(-2);
}

let result = timeConversion('07:05:45PM');
console.log(result);