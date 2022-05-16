class Forecast {
    constructor() {
        this.key = 'key';
        this.weatherUri = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUri = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);

        // object shorthand notation
        return { cityDets, weather };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUri + query);
        const data = await response.json();

        return data[0];
    }
    async getWeather(id) {

        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherUri + query);
        const data = await response.json();

        return data[0];
    }
}


// ========================== functional way ======================

// const key = 'oyAI23u14xroCH7O7xAxqGETUqabfAb1';

// // get weather info

// const getWeather = async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// }

// //  get city info
// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// };




