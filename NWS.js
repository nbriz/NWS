class NWS {
  static async getGeo (log) {
    const url = 'https://location.services.mozilla.com/v1/geolocate?key=test'
    const res = await window.fetch(url)
    const json = await res.json()
    if (log) console.log('moz geo:', json)
    return json
  }

  static async getPoint (lat, lon, log) {
    if (!lat) {
      const geo = await this.getGeo()
      lat = geo.location.lat
      lon = geo.location.lng
    }
    const url = `https://api.weather.gov/points/${lat},${lon}`
    const res = await window.fetch(url)
    const json = await res.json()
    if (log) console.log('nws point:', json)
    return json
  }

  static async getWeeklyForecast (point, log) {
    if (!point) point = await this.getPoint()
    const url = point.properties.forecast
    const res = await window.fetch(url)
    const json = await res.json()
    if (log) console.log('nws weekly forecast:', json)
    return json.properties.periods
  }

  static async getHourlyForecast (point, log) {
    if (!point) point = await this.getPoint()
    const url = point.properties.forecastHourly
    const res = await window.fetch(url)
    const json = await res.json()
    if (log) console.log('nws hourly forecast:', json)
    return json.properties.periods
  }

  static async getForecast (point, log) {
    if (!point) point = await this.getPoint()
    const url = point.properties.forecast
    const res = await window.fetch(url)
    const json = await res.json()
    if (log) console.log('nws forecast:', json)
    return json.properties.periods[0]
  }
}

window.NWS = NWS
