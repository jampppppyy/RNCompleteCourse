const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const Track = mongoose.model('Track');
const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
})

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;

    if (!name || !locations) return res.status(422).send({ error: 'You must provide a name and locations!' })
    try {
        const tracks = new Track({ name, locations, userId: req.user._id })
        await tracks.save();
        res.send({ message: 'Successfully save tracks.', tracks });
    } catch (error) {
        return res.status(422).send('Error in saving tracks', error)
    }

})
module.exports = router;