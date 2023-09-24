const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': '85aa6c817f9f4cec890137839e53d847',
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

async function getUser() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  }