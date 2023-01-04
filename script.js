"use strict"

const root = document.querySelector(":root")
const self = document.querySelector(".self")
const star = document.querySelector(".fa-regular")
const time = document.querySelector(".time")
const day = document.querySelector(".day")

var data = new Date
var hour = data.getHours()
var minute = data.getMinutes()
var second = data.getSeconds()

function timing() {
    data = new Date
    hour = data.getHours()
    minute = data.getMinutes()
    second = data.getSeconds()
    // checkTime(minute)
    // checkTime(second)
    // time.innerHTML = `${hour}:${minute}:${second}`
    time.innerHTML = hour + ":" + minute + ":" + second
}

timing()
setInterval(timing, 1000);

day.innerHTML = `0${data.getDate()}/0${data.getMonth()+1}/${data.getFullYear()}`

var random = ((Math.ceil((Math.random())*100))%3)+1

if (random == 1) {
    self.src="images/blink.png.jpg"
} else if (random == 2) {
    self.src="images/look.png.jpg"
} else if (random == 3) {
    self.src="images/think.png.jpg"
}

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
        return i;
    }
}