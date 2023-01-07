"use strict"

// DECLARATIONS OF CONSTANTS
const root = document.querySelector(":root")
const self = document.querySelector(".self")
const star = document.querySelector(".fa-regular")
const time = document.querySelector(".time")
const day = document.querySelector(".day")
const cuckoo = new Audio("cuckoo.mp3")
cuckoo.volume = 0.2

// WAIT FUNCTION
// function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
// }

// RANDOM PICTURE
var random = ((Math.ceil((Math.random())*100))%3)+1

if (random == 1) {
    self.src="images/blink.png.jpg"
} else if (random == 2) {
    self.src="images/look.png.jpg"
} else if (random == 3) {
    self.src="images/think.png.jpg"
}

// DECLARATIONS OF TIME VARIABLES
var data = new Date
var hour = data.getHours()
var minute = data.getMinutes()
var second = data.getSeconds()
var lastSecond

// CLOCK TIMER FUNCTION
function timing() {
    lastSecond = second

    data = new Date
    hour = data.getHours()
    minute = data.getMinutes()
    second = data.getSeconds()
    minute = checkTime(minute)
    second = checkTime(second)
    // time.innerHTML = `${hour}:${minute}:${second}`
    time.innerHTML = hour + ":" + minute + ":" + second

    cuckooFunction()
}

// CUCKOO CLOCK FUNCTION

async function cuckooFunction() {
    if (minute == '00' && second == '00') {
        cuckoo.play()
        self.src="images/cuckoo-clock.gif"
        // console.log("hell")
        await new Promise(r => setTimeout(r, 10000));
        // console.log("hello")
        if (random == 1) {
            self.src="images/blink.png.jpg"
        } else if (random == 2) {
            self.src="images/look.png.jpg"
        } else if (random == 3) {
            self.src="images/think.png.jpg"
        }
    }
}

//-----------------------------------

timing()
setInterval(timing, 999);

// day.innerHTML = `0${data.getDate()}/0${data.getMonth()+1}/${data.getFullYear()}`

if (hour >= 6 && hour < 12) {
    document.querySelector(".initalText").innerHTML = "Bom Dia, João!"
    root.style.setProperty("--sky-color", "linear-gradient(rgb(104, 184, 230), rgb(38, 90, 168))")
    if (star.classList.contains("fa-moon")) star.classList.remove("fa-moon")
    star.classList.add("fa-sun")

} else if (hour >= 12 && hour < 18) {
    document.querySelector(".initalText").innerHTML = "Boa Tarde, João!"
    root.style.setProperty("--sky-color", "linear-gradient(rgb(221, 195, 45), rgb(192, 80, 16))")
    if (star.classList.contains("fa-moon")) star.classList.remove("fa-moon")
    star.classList.add("fa-sun")

} else if (hour >= 18 && hour <=24 || hour >= 0 && hour < 6) {
    document.querySelector(".initalText").innerHTML = "Boa Noite, João!"
    root.style.setProperty("--sky-color", "linear-gradient(rgb(50, 35, 85), rgb(26, 10, 51))")
    if (star.classList.contains("fa-sun")) star.classList.remove("fa-sun")
    star.classList.add("fa-moon")
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
        return i
    } else {
        return i
    }
}

document.querySelector("input").addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key == "Enter") {
        e.preventDefault()
        // window.open(`https://www.google.com/search?client=firefox-b-d&q=${document.querySelector("input").value}`)
        window.open(`https://www.google.com/search?q=${document.querySelector("input").value}`)
    }
})