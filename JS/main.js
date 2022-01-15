const deg = 6;   
let hr_El = document.getElementById("hr");
let mn_El = document.getElementById("mn");
let sc_El = document.getElementById("sc");


setInterval(() => {


    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr_El.style.transform = `rotateZ( ${(hh)+(mm/12)}deg)`;
    mn_El.style.transform = `rotateZ(${mm}deg)`;
    sc_El.style.transform = `rotateZ(${ss}deg)`;

})