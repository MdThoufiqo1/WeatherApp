import React, { useState } from 'react'
import Axios from 'axios'
import './App.css';
const key="c699e177df6f6ad045395cc7eff53a15";


function App() {
  const [city,setcity]=useState("");
  const [data,setdata]=useState();

  var showdate=new Date();
  var display=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
  var dt=showdate.toDateString();
  var displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()
   const handle= async()=>{
    try{
      const res=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      setdata(res.data);
      console.log(res.data) 
     }
    catch(err){
      alert("error name")

    }

   }
  return (
    <>
           <div className="card-1">
            <div className=' text-center m-2'>
            <h1 className="head">Weather app</h1>
            <div className='input-card m-2 '>
            <input type="text" className="input-control m-2"   value={city} onChange={e=>setcity(e.target.value)}/>
            <button className='btn btn-primary m-2 button' onClick={handle}>Search</button>
            </div>
            </div>
           <div className='card-2'>
            
            {data && (
              <div className='text-center'> 
              <div className='card-head'> 
                <h1 className='head-1'>{data.name},{data.sys.country}</h1>
              <p className='para-1'>{data.main.temp}°F</p>
              </div>
              <p>{dt}, {displaytime}</p>
      
              <div className='card-para'>
                     <div className="feels">
                        <p className='bold para'>{data.main.feels_like}°F</p>
                        <p className='para-1'>Feels Like</p>
                      </div>
                      <div className="humidity">
                        <p className='bold para'>{data.main.humidity}%</p>
                        <p className='para-1'>Humidity</p>
                      </div>
                      <div className="wind">
                        <p className='bold para'>{data.wind.speed.toFixed()} MPH</p>
                        <p className='para-1'>Wind Speed</p>
                      </div>  
              </div>  
              </div>
              
            )}
            </div>
            </div>
        

  
      
  
    </>
  );
}

export default App;
