require('dotenv').config();
require('./config/database');

const Fish = require('./models/fish');


// IIFE
(async function() {
    await Fish.deleteMany({});
    const fishData = await fetch('https://whats-that-fish.up.railway.app/fishes')
    .then(res => res.json())
    .then((json) => {
        console.log(json);
        return json;
    });
    console.log(fishData, 'fishData')
    
    await Fish.create(fishData);

    console.log('finished')

    process.exit();

})();
