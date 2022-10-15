const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    // if input in null
    if(cityVal === "" ){ 
        city_name.innerText = `Plz  enter the city name`;
        datahide.classList.add('data_hide');
// if input is correct
    }else{
        try{
            // Api 
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9ef32ed6afbf91e7c42025f244944d14`;

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            const tempMode = arrData[0].weather[0].main;

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            
            // Weather status
            if(tempMode == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(tempMode == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if(tempMode == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }

            datahide.classList.remove('data_hide');
            // if input is incorrect
        }catch{
            city_name.innerText = `Plz  enter correct city name`;
            datahide.classList.add('data_hide');
        }
        
    }

    // alert("heello");
};

submitBtn.addEventListener('click', getInfo);