

const url = "http://api.openweathermap.org/data/2.5/weather?q=washingtondc&APPID=4b79ea98e1380c1f6987c30f4703b089"


$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);

        $("#location").text(result.name)
        
        
        const F = Math.round(result.main.temp * (9/5) - 459.67);
        const Fahrenheit = F.toString();
        $("#temperature").text(Fahrenheit);

        $("#sky").text(result.weather[0].description);
        
        const windSpeed = Math.round(result.wind.speed / .44704);
        const wind = windSpeed.toString();
        $("#wind").text(windSpeed);

    }
})