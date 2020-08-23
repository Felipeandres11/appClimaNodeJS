const axios = require('axios');


const getLugarLatLng = async (direccion) => {

    const encodedUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}?json=1`,
        headers: {'auth': //api key}
      });
    
    const resp = await instance.get();
    

    if (resp.data.standard.length === 0){
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data;
    const lug = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        
        lug,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng  
};