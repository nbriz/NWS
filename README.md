# NWS.js

helper functions that abstract the [National Weather Service API](https://www.weather.gov/documentation/services-web-api).


## install

download <a href="https://raw.githubusercontent.com/nbriz/NWS/main/NWS.js" download>here</a>, or via npm...
```
$ npm install git+https://github.com/nbriz/NWS.git
```
then...
```html
<script src="node_modules/NWS/NWS.js"></script>
````
or...
```html
<script src="https://cdn.jsdelivr.net/gh/nbriz/NWS/NWS.js"></script>
```

## methods

all arguments are optional, `log` is a boolean value whether or not to log the raw data to the console.

```js
// returns today's forecast object
NWS.getForecast(point, log)

// returns array of daily forecast objects for the week
NWS.getWeeklyForecast(point, log)

// returns array of hourly forecast objects for the day
NWS.getHourlyForecast(point, log)

// returns NWS "point" data (used to get forecast)
NWS.getPoint(lat, lon, log)

// returns GPS location (used to get point data)
NWS.getGeo(log)
```

example forecast object:

```js
{
  detailedForecast: "Occasional rain and occasional drizzle. Cloudy, with a high near 42. Southwest wind 5 to 10 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."
  endTime: "2022-03-24T18:00:00-05:00"
  icon: "https://api.weather.gov/icons/land/day/rain,80/rain,90?size=medium"
  isDaytime: true
  name: "Today"
  number: 1
  shortForecast: "Occasional Light Rain"
  startTime: "2022-03-24T08:00:00-05:00"
  temperature: 42
  temperatureTrend: null
  temperatureUnit: "F"
  windDirection: "SW"
  windSpeed: "5 to 10 mph"
}
```
