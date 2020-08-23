const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng) 
        return `El clima de ${coords.lug} es de ${temp} grados`
    } catch (error) {
        return `No se pudo determinar`
    }
}


getInfo(argv.direccion)
    .then(data => {
        console.log(data)
    }).catch(err => console.log(err))