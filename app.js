const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post("/", (req, res) => {
    // console.log(req.body.CityName);
    // console.log("request received");
    const cityName = req.body.CityName;
    const apiKey = "d040653ddd3ba63bb743ba38322a9517";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            // console.log(data);
            const wData = JSON.parse(data);
            // console.log(wData);
            const temp = wData.main.temp;
            // console.log("Temp: " + temp);
            const wDesc = wData.weather[0].description;
            // console.log("Description: " + wDesc);
            const cityName = "delhi";
            const apiKey = "d040653ddd3ba63bb743ba38322a9517";
            const unit = "metric";
            const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + unit;
            https.get(url, (response) => {
                console.log(response.statusCode);
                response.on("data", (data) => {
                    // console.log(data);
                    const wData = JSON.parse(data);
                    // console.log(wData);
                    const temp = wData.main.temp;
                    // console.log("Temp: " + temp);
                    const wDesc = wData.weather[0].description;
                    // console.log("Description: " + wDesc);
                    const wIcon = "http://openweathermap.org/img/wn/" + wData.weather[0].icon + "@2x.png";
                    res.write("<h1> The temperature in New Delhi,India is: " + temp + " degree Celcius</h1>");
                    res.write("<h3> Weather Description is: " + wDesc + "<img src=" + wIcon + "></h3>");
                    res.send(); //we can only send one send request 
                })
            })
            const wIcon = "http://openweathermap.org/img/wn/" + wData.weather[0].icon + "@2x.png";
            res.write("<h1> The temperature in " + cityName + " is: " + temp + " degree Celcius</h1>");
            res.write("<h3> Weather Description is: " + wDesc + "<img src=" + wIcon + "></h3>");
            res.send(); //we can only send one send request 
        })
    })
})

//       
app.listen(6969, () => {
    console.log("The Server is running on the server 6969!!!")
})