
let Name=prompt("Enter your name");
Name = Name.charAt(0).toUpperCase()+Name.slice(1);
let addName=document.getElementById("myName");


addName.innerHTML=Name;


let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("myClock").innerHTML = time;
    setTimeout(clock, 1000);
}

clock();


