function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var ap="AM";

if(h>11) ap="PM";
if(h>12) h=h-12;
if(h==0) h=12;

//to add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);

document.getElementById('clock').innerHTML=h+":"+m+":"+s+" "+ap;

var MM=today.getMonth();
var mn=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DD=today.getDate();
var YYYY=today.getFullYear();
document.getElementById('date').innerHTML = mn[MM]+"  "+DD+"  "+YYYY;

t=setTimeout('startTime()', 500);
}

function checkTime(i)
{
if (i<10)
{ i="0" + i}
return i
}

window.onload=startTime;
