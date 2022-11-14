import React from 'react';
import './Card.css';
import { Spinner } from '../Spinner'

const Card = ({loadingData, showData, weather, forecast}) => {
  

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() +1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    
    
    let url ='';
    let iconUrl ='';

    let iconUrl21 = "";
    let iconUrl05 = "";
    let iconUrl13 = "";

    let forecastDate21 = "";
    let forecastDate05 = "";
    let forecastDate13 = "";

    if(loadingData){
        return <Spinner/>
    }

    if(showData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';

        iconUrl21 = url + forecast.list[21].weather[0].icon + ".png";
        iconUrl05 = url + forecast.list[5].weather[0].icon + ".png";
        iconUrl13 = url + forecast.list[13].weather[0].icon + ".png";

        forecastDate21 = forecast.list[21].dt_txt.substring(8, 10) + '/' + forecast.list[21].dt_txt.substring(5, 7) + '/' + forecast.list[21].dt_txt.substring(0, 4);
        forecastDate05 = forecast.list[5].dt_txt.substring(8, 10) + '/' + forecast.list[5].dt_txt.substring(5, 7) + '/' + forecast.list[5].dt_txt.substring(0, 4);
        forecastDate13 = forecast.list[13].dt_txt.substring(8, 10) + '/' + forecast.list[13].dt_txt.substring(5, 7) + '/' + forecast.list[13].dt_txt.substring(0, 4);
    }
  




    return(
        
        <div className='mt-5'>

            {
                  showData === true ? (
                    <div className='container'>
                        <div className='card mb-3 mx-auto text-ligth' >
                          <div className='row g-0 '>
                            <div className='caja-clima'>
                               <p className='card-desc col-12'><img src={iconUrl} alt="icon " />{weather.weather[0].value}</p>
                               <h3 className='card-info col-12'>{weather.weather[0].description}</h3>
                            </div>
                            <div className='temperaturas row'>
                              <h2 className='mx-auto card-tittle'>{weather.name}</h2>
                              <h2 className=' card-date col-12'>{date}</h2>
                                <h1 className='card-temp col-12'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                <p className='card-temp-max col-12 '><i class="bi bi-thermometer-high">: {(weather.main.temp_max - 273.15).toFixed(1)}°C</i></p>
                                <p className=' card-temp-min col-12'><i class="bi bi-thermometer-low">: {(forecast.list[3].main.temp_min - 273.15).toFixed(1)}°C</i></p>
                               
                              </div>

                                <div className='row'>
                                     <h3 className='lluvia col-md-3'><i class="bi bi-person-lines-fill"></i>{(weather.main.feels_like - 273.15).toFixed(1)}°C feels like</h3>
                                     <h3 className='lluvia col-md-3'><i class="bi bi-wind"></i> {weather.wind.speed} Speed</h3>
                                     <h3 className='lluvia col-md-3'><i class="bi bi-moisture"></i> {weather.main.humidity}% Humidity</h3>
                                     <h3 className='lluvia col-md-3'><i class="bi bi-cloud-haze"></i> {weather.main.pressure} Pressure</h3>
                                </div>
                               

                            </div>
                        </div>


                        

                        <div className='row mt-3'>
                        <table class="table">
                            <thead>
                              <tr class=" tl">
                                <th scope="col">Date</th>
                                <th scope="col">Weather</th>
                                <th scope="col">Temperature</th>
                                

                               
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">{forecastDate05}</th>
                                <td><p className='description'><img src={iconUrl05} alt="icon" />{forecast.list[5].weather[0].description}</p></td>
                                <td><p className='temp'>{(forecast.list[8].main.temp - 273.15).toFixed(1)}°C</p></td>
                                
                                
                              </tr>
                              <tr>
                                <th scope="row">{forecastDate13}</th>
                                <td><p className='description'><img src={iconUrl13} alt="icon" />{forecast.list[13].weather[0].description}</p></td>
                                <td><p className='temp'>{(forecast.list[16].main.temp - 273.15).toFixed(1)}°C</p></td>
                                
                                
                              </tr>
                              <tr>
                                <th scope="row">{forecastDate21}</th>
                                <td><p className='description'><img src={iconUrl21} alt="icon" />{forecast.list[21].weather[0].description}</p></td>
                                <td><p className='temp'>{(forecast.list[24].main.temp - 273.15).toFixed(1)}°C</p></td>
                                
                              </tr>

                            </tbody>
                          </table>
                        </div>

                    </div>
                    

                  ):(
                    <h2 className='noData'>
                    <i class="text-ligth bi bi-exclamation-triangle-fill"></i>
                    <p>No data</p>
                    </h2>
                    
                  )
            }


        </div>
    );
        
        
}

export { Card };