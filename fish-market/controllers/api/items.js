const Fish = require('../../models/fish');

module.exports = {
    index,
    show
    };

    async function index(req, res) {
    const fish = await Fish.find({}).sort('speciesName').populate('speciesName').exec();
    // re-sort based upon the sortOrder of the categories
    fish.sort((a, b) => a.speciesName.sortOrder - b.speciesName.sortOrder);
    res.json(fish);
    }

    async function show(req, res) {
    const fish = await Fish.findById(req.params.id);
    res.json(fish);
}
