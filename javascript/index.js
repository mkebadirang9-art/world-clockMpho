function updateTime(){
//Los Angeles
    
    let losAngelsElement = document.querySelector("#los-angeles");
    let losAngelsDateElement = losAngelsElement.querySelector(".date");
    let losAngelsTimeElement = losAngelsElement.querySelector(".time");
    if (losAngelsElement){ 

        let losAngelsTime = moment().tz("America/Los_Angeles");
        
        losAngelsDateElement.innerHTML = losAngelsTime.format("MMM Do YYYY");
        losAngelsTimeElement.innerHTML = `${losAngelsTime.format("h:mm:ss")}
        <small> ${losAngelsTime.format("A")}</small>`;
        }
        
        //Paris
        let parisElement = document.querySelector("#paris");
        if (parisElement){ 

            let parisDateElement = parisElement.querySelector(".date");
            let parisTimeElement = parisElement.querySelector(".time");
            let parisTime = moment().tz("Europe/Paris");
            
            parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
            parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")}
            <small> ${parisTime.format("A")}</small>`;
        }
    }
        function updateCity(event){
        let cityTimeZone =event.target.value;
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = ` 
        
        <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMM Do YYYY")}</div>
        
        </div>
        
        <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small></div>
        
        </div>
        `;
    }
    updateTime();
    setInterval(updateTime,1000);

    let citiesSelectElement = document.querySelector("#city")
    citiesSelectElement.addEventListener("change", updateCity)