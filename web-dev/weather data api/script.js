document.getElementById('mybtn').onclick = () => {
 let p =  document.getElementById("dynamic").value;

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${p}&units=metric&APPID=c8d5908ddb6bdbadbd9232dd75563ce7`).then(data => {
    // console.log(data.json())
    return data.json()
  }).then(data2 =>{
    console.log(data2)
     document.getElementById("info").innerHTML =`  <ul>
    <li>city : ${data2.name}</li>
    <li> temp in c: ${data2.main.temp} </li>
    <li> desc : ${data2.weather[0].description} </li>
  </ul>` 
    // console.log(data2.name)
    // console.log(data2.main.temp)
    // console.log(data2.weather[0].description)
  })
  


}




