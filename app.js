let getCity = async (city) => {
  const result = await fetch(
    "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=fT8AbYzPtSIUdt63D1LgVk5MW1cgWtOb&q=" +
      city
  );
  const data = await result.json();
  const location = await data[0].Key;

  let getWeather = async (code) => {
    const result = await fetch(
      "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" +
        code +
        "?apikey=fT8AbYzPtSIUdt63D1LgVk5MW1cgWtOb"
    );
    const data = await result.json();

    const date = await data.DailyForecasts[0].Date;
    console.log("Date: " + date.slice(0, 10));

    let temperature = data.DailyForecasts[0].Temperature;
    let celsius = (temperature) => {
      Object.keys(temperature).forEach((key) => {
        fahrenheit = temperature[key].Value;
        c = (fahrenheit - 32) / 1.8;
        console.log(Math.floor(c) + " C");
        return c;
      });
    };
    celsius(temperature);

    let text = data.Headline.Text;
    console.log(text);
  };
  getWeather(location);
};

var prompt = require("prompt-sync")();
var city = prompt("Хайж буй хотоо энд бичнэ үү: ");
getCity(city);
