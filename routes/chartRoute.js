const express=require('express')
const router = express.Router();
const db = require('../db/db')



router.use(function timeLog(req, res, next) {
  console.log('TimeStamp : ', Date.now());
  next();
});

router.get('/', (req, res) =>{
    db.find({},  (err, docs)=> {
        if(err){
            res.status(404).json()
        }
        res.json(docs)
    });
});
// define the filter by name
router.get('/filter/:name', (req, res)=> {

    const {name} =req.params
   
    const filter= new RegExp(name,'i')
    
 
  db.find({ user:filter },  (err, docs) =>{
    if(err){
        res.status(404).json()
    }
    res.json(docs)
  });
  
});

router.get('/:name', (req, res)=> {

    const {name} =req.params
    
    db.findOne({ user:name },  (err, docs) =>{
      if(err){
          res.status(404).json()
      }
      res.json(docs)
    });
  
  
});



module.exports = router;
