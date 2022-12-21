const digitalClock = document.querySelector("#digitalClock")

setInterval( () => {
    let date = new Date()
    digitalClock.innerHTML = date.toLocaleTimeString()
    
    // let hour = date.getHours()
    // let minutes = date.getMinutes()
    // let seconds = date.getSeconds()

    // digitalClock.innerHTML = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}, 100)