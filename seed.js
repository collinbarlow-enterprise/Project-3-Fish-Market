require('dotenv').config();
require('./config/database');

const Fish = require('./models/fish');

(async function() {
    await Fish.deleteMany({});
    const fishData = await fetch('https://whats-that-fish.up.railway.app/fishes/pics')
    .then(res => res.json())
    .then((json) => {
        return json;
    });
    await Fish.create(fishData);
    process.exit();
})();
