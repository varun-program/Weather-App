 const apikey="02b28eb5f8e81181ce54258094aaad5e";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox= document.querySelector(".search input");
        const weathericon=document.querySelector(".weather-icon")
        const searchbtn= document.querySelector(".search button");
        async function checkweather(city) {
            const respones = await fetch(apiUrl+ city +`&appid=${apikey}`)
            if(respones.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }else{
            var data = await respones.json()
            console.log(data)
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
            if(data.weather[0].main =="Clouds"){
                weathericon.src="images/clouds.png"
            }else if(data.weather[0].main =="Clear"){
                weathericon.src="images/clear.png"
            }else if(data.weather[0].main =="Rain"){
                weathericon.src="images/rain.png"
            }else if(data.weather[0].main =="Drizzle"){
                weathericon.src="images/drizzle.png"
            }else if(data.weather[0].main =="Mist"){
                weathericon.src="images/mist.png"
            }

            document.querySelector(".weather").style.display="block";}
        }
        searchbtn.addEventListener("click",()=>{
            checkweather(searchbox.value)
        })