const axios = require('axios')

const getClima = async(lat,lon) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`) //FALTA EL API KEY - CREAR UNA CUENTA E INGRESAR EL PROPIO

    return resp.data.main.temp;
}


module.exports = {
    getClima
}