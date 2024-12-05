const monthnameel =document.querySelector(".month-name");
const daynameel =document.querySelector(".day-name");
const daynumberel =document.querySelector(".day-number");
const yearel =document.querySelector(".year");


const date = new Date();
const month =date.getMonth()
monthnameel.innerText = date.toLocaleString("en",{
    month:"long"
})

daynameel.innerText = date.toLocaleString("en",{
    weekday:"long"
})

daynumberel.innerText = date.getDate()

yearel.innerText = date.getFullYear()