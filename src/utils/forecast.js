const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c6e9d3fc2116bd5fd7ed55c0944c3101&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'
    
    request({url: url,json:true}, (error,{body}) => {
        if(error){
            callback('Unable to connect to weather services',undefined)
        }
        else if(body.error){
            callback('Improper cordinates',undefined)
        } else {
            callback(undefined,
                // 'The current temperature is '+
                // body.current.temperature +' degrees. The chance ' +
                // 'of precipitation is '+body.current.precip+
                // '%. The UV index is '+body.current.uv_index+'.'
                body.current.weather_descriptions[0] + ". It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out. The humidity is "+body.current.humidity +"%."
            )
        }
    })
}

module.exports = forecast