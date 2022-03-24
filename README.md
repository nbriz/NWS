# NWS.js

Helper functions that abstract the [National Weather Service API](https://www.weather.gov/documentation/services-web-api). You can view an [interactive example here](https://netnet.studio/#example/eJylVv1v2joU/VcsnrTtqRnhm7brKlE6KFAY35Su0+QkDjFN7NRxCGHa//6uA4ywMr1J+4lgO/fec+45N/6eYdgjmcuMRTye0TIy9tW/u3H3Xq+PRsjAATUD2HgmceayUtUyJrfUiX/Ur07acWNi5D9Hm9qABe6Yddu1F2v0LOoPvUUwbk1oY/5AyOjurmPNGzr2uVMsOW6pG5TbC7NVmzixVdXDdbXY98IxmQ+j21g8htRZm37t1uhMZ4OH7v05kcvpaGp36yI0Nsa4UKivOnJi5+oj3q8G9sOEYByzM9bsui8O1r1lM9dwX+5bm7nclFiu5lfbHqtFRrVKKs8zzHvNMbvpnEl25xSmtYe4x2l08bBcdepSeLkp82aF2Q31JoHuFcxNaeIwe3MxHozteZO0S/pmXW+JHm+VYrEu5G97Vf9xGm1ksTL0xUsUP3ZXud7trD2clwURE+HkrJwI76ZTWl8Ld35rifNcPPzkTSpON8jj5rCGx73Pg6rP4pU1HVjufNObzuvtRTiOC33z2XdY52YgZq173CGtxXgkngvn2Jn6JeZG/bVzk/MaD8aw0iwtzZHRvzP8M2cwz/cK5dgcViOa/zSN+XC92djLOBo9svbsU38pGszs21XafFldRLc2G/TLYz28yLUeWVRpxrMZFmeDs9p9Zxb7g48gAMpsnrn88j0jqXSVAiiTQknG5mYYZC5Z6LqgH7KWsNdiSDo0QGSNPd8lqPXWQ2FA2QJhFNBkyaWGwCJGPWo+Iw9bBJnYdYmFrjByBLE/PmUcKf3gUtcXVDqhkTW5pzND0I3em42eMkhisSASzn0zXMyenzLXsH6l42sUOdR0IB5DBoG8EFRyJMhLSAKJLCwxsgX3oERyIlsURdmIYNgU2QVf6Rbg8wiTWFLO9ICIFTVJ8D4ixnvs09N1JGexi2bbOGi0fQvV+q2kQCjHooHv4jgpwgyFgAxIEs8nAstQEMRZshWYghCWzfzQDsyrdTDngfsvea2gFbWSVtYqWlU71y60fE7L57V8QcsXv6baElAgOsGt/Hv9xpUfAhm75M1CfrjSkzVEXKLwQtNWBEWCSkkYCriXJEXqDLK5QCacIUL1lIfiqHTMLGQ6mC3UJpVvAzgP8TAyqHyNRM2aNJSylq9o+aqWPz8UPt6dQ/QXYcGjL4iU8U5WGlqGgUp1wGfR1Sl0EYgKzpk8VHG4nWbEx+zEKwFkT/gDFEhVZFMBuaCECHq8FfmCK8zQXjhKhEyoTlGjJdwkfSUmh8fUy66LQBDmtj0hoxK9IzRRTyPh28YgVObAGoJ/9V0P3ICGwb9HpAIRXMikDuenz1IMF3JpYqGCLY4UflNQX54iDQ7v7bTN8hsP/bFjd9Ulpkg8qcYBCKZJ5V1ogGd9HlDJRXysGw+DEOyQmcpnaWhghIJWKGqFklYES5SPJMT2DUwktOvAn8BOnABGxBKw4xN4LbIiLocuZz2+oa6Ls1wsdMLeT0ZqfgT6jBh6G6/wKMmhD4kNTWcm0UcwV7bq0nEQM/PbHtVJupIjjuCMh8FP/Al5++FpXCturnTj+pgxCKQUQ0wcyDRh5dPT4RAGRQSJkKWGBvQyC+Eau2jv/t3TpbQdQLO2MfbZEDeWxATtSGgnmIApHwGLKywoNtzD3E+CqOm8i3cMIPRha2umdP1VrXD+S5Ojfa/SSZRb5E/P/q/XEyy7lBScD1KRajnR6FMmp7rDt+5Oze9t2JTf91ETVqzt9CKvke4oOglYTYIU4GJOK+Z/D5jxZGK8gv1a7H+C++0r4A/HwF8BnkC1fwN6r7QT3i6WDrDvQVdunAAH8SQfoG18pdqDIPdRks9/EhnL7QdMwbRiuPtSFSDeQ1aBfLwgWXQ8URkyXa7uL7+578x5mFw3XIIFQ56yADZ4+NfjcX+hMWLwDrb2M/3oSrK/KaRGJnD69cd/4EEQUg==).


## install

download <a href="https://raw.githubusercontent.com/nbriz/NWS/main/NWS.js" download>here</a>, or via npm...
```
npm install git+https://github.com/nbriz/NWS.git
```
then...
```html
<script src="node_modules/NWS/NWS.js"></script>
````
or use a CDN...
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
