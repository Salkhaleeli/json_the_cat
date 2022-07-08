const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2]

const callback = ((error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (description) {
    console.log('result:',description );
  }
});

fetchBreedDescription(breedName, callback);


