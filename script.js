let galleryContainer= document.querySelector(".gallery-con");
let galleryImages=document.querySelectorAll(".gal-img");   
let nextButton=document.querySelector(".next-btn");
let backButton=document.querySelector(".back-btn"); 

let day=document.querySelector("#day");
let minute=document.querySelector("#minute");
let second=document.querySelector("#second");
let hour=document.querySelector("#hour");
let expoDate= "12 feb 2025 10:00 AM";
let difference=0;
let remainingDays=0;
let remainingHours=0;
let remainingMinutes=0;
let remainingSeconds=0;

const timer=()=>{
    let end= new Date(expoDate);
    const now = new Date();
    console.log(now);
    console.log(end);
    difference=(end-now);  ////milli second
    console.log(difference)
   
    remainingDays=Math.floor(difference/1000/3600/24);

    remainingHours= Math.floor(((difference/1000/3600/24)-remainingDays)*24);
    remainingMinutes=Math.floor((((difference/1000/3600/24)-remainingDays)*24-remainingHours)*60);
    remainingSeconds=Math.floor(((((difference/1000/3600/24)-remainingDays)*24-remainingHours)*60-remainingMinutes)*60);
    
   
    console.log(remainingDays);
    console.log(remainingHours);
    console.log(remainingMinutes);
    console.log(remainingSeconds);
    day.innerHTML=remainingDays;
    minute.innerHTML=remainingMinutes;
    second.innerHTML=remainingSeconds;
    hour.innerHTML=remainingHours;
    
}

timer()
setInterval(()=>{
    timer();
},1000);

