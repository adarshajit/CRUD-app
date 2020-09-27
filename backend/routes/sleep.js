const router = require('express').Router();
let Sleep = require('../models/sleep.model');

router.route('/').get((req,res)=>{
    Sleep.find()
        .then(sleep => res.json(sleep))
        .catch(err => res.status(400).json("Error:"+ err))
});

router.route('/add').post((req,res)=>{
    const duration = Number(req.body.duration);
    const newSleep = newSleep({duration});

    newSleep.save()
    .then(() => res.json('Sleep Duration added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res)=>{
    Sleep.findById(req.params.id)
        .then(sleep => res.json(sleep))
        .catch(err => res.status(400).json("Error:"+ err))
});

router.route('/:id').delete((req,res)=>{
    Sleep.findByIdAndDelete(req.params.id)
        .then(() => res.json("Sleep Duration Deleted"))
        .catch(err => res.status(400).json("Error:"+ err))
});

router.route('/update/:id').post((req, res) => {
    Sleep.findById(req.params.id)
      .then(sleep => {
 
        sleep.duration = Number(req.body.duration);
    
  
        exercise.save()
          .then(() => res.json('Sleep Duration updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });










module.exports = router;