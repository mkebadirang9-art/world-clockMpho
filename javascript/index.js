function updateTime(){
//Los Angeles
    
    let losAngelsElement = document.querySelector("#los-angels");
    let losAngelsDateElement = losAngelsElement.querySelector(".date");
    let losAngelsTimeElement = losAngelsElement.querySelector(".time");
    let losAngelsTime = moment().tz("America/Los_Angeles");
    
    losAngelsDateElement.innerHTML = losAngelsTime.format("MMM Do YYYY");
    losAngelsTimeElement.innerHTML = `${losAngelsTime.format("h:mm:ss")}
    <small> ${losAngelsTime.format("A")}</small>`;

    //Paris
    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    
    parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")}
    <small> ${parisTime.format("A")}</small>`;
    }
    updateTime();
    setInterval(updateTime,1000);