// DIGITAL CLOCK PROGRAM

function updateClock()
{
    const now = new Date(); // GET CURRENT DATE AND TIME, 24-HOUR FORMAT
 
    let hours = now.getHours(); // GET HOURS (0-23) 
    const minutes = now.getMinutes().toString().padStart(2, 0); // GET MINUTES, KEEP 2 DIGITS
    const seconds = now.getSeconds().toString().padStart(2, 0); // GET SECONDS, KEEP 2 DIGITS

    
    const appm = (hours >= 12) ? "PM" : "AM";  // DETERMINE AM or PM

    hours = hours % 12 || 12;  // CONVERT 12-HOUR FORMAT (0  BECOMES 12)
    hours = hours.toString().padStart(2, 0);  // KEEP HOURS IN 2 DIGITS

    const timeString = `${hours}:${minutes}:${seconds}  ${appm}`;

    document.getElementById("clock").textContent = timeString; // DISPLAY CLOCK
}

updateClock();
setInterval(updateClock, 1000); // UPDATE TIME IN EVERY 1000 ms
