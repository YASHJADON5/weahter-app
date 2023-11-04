
const inputCity= document.querySelector(".input");

const but=document.querySelector('button');

const weatherIcon=document.querySelector('.weather-icon');


const apikey="ffd7a8eb250069a40ab7539affc0675e";

const api="https://api.openweathermap.org/data/2.5/weather?&units=metric";

async function weatherDetail(city){

    const response= await fetch(api + "&q=" + city + "&appid=" + apikey);

    if(response.status=="404"){
       document.querySelector('.error').style.display="block";
       document.querySelector('.weather').style.display="none";
     }
else{
    let data= await response.json();

    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";
    

    if(data.weather[0].main=="Clear"){
       weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    document.querySelector('.error').style.display="none";
    document.querySelector('.weather').style.display="block";
   
}
    

}
but.addEventListener('click',()=>{
    const city = inputCity.value;
   
    weatherDetail(city);

})



