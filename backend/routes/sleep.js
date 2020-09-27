const router = require('express').Router();
let Sleep = require('../models/sleep.model');

router.route('/').get((req,res)=>{
    Sleep.find()
        .then(sleep => res.json(sleep))
        .catch(err => res.status(400).json("Error:"+ err))
});

router.route('/add').post((req,res)=>{
    const duration = Number(req.body.duration);
    const newSleep = new Sleep({duration});

    newSleep.save()
    .then(() => res.json('Sleep Duration added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;