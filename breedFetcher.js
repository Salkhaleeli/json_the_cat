const request = require('request')
const breedName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null)
      return;
    }
    console.log('statusCode:', response.statusCode); 
    const data = JSON.parse(body);
    console.log(data);
    if (data[0]) {
      description = data[0].description
      callback(null, description)
    } else {
      error = 'No data found'
      callback(error, null)
    }
  });
};
module.exports = {fetchBreedDescription};