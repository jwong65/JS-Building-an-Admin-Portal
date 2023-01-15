const router = require('express').Router()

const Book = require('../models/book.js')

router.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

router.get('/', (req, res)=>{
    Book.find()
        .then(foundBook=>{
            res.json(foundBook)
        })
        .catch(err=>{
            res.status('404').json({
                message:'404 Error'
            })
        })
    // db.Book.find()
    // .then(foundBook=>{
    //     res.json(foundBook)
    // })
    // .catch(err=>{
    //     res.status('404').json({
    //         message: '404 Error'
    //     })
    // })
})

router.get('/:id', (req, res)=>{
    Book.findById(req.params.id)
        .then(foundBook=>{
            res.json(foundBook)
        })
        .catch(err=>{
            res.status('404').json({
                message:'404 Error'
            })
        })
})
router.put('/:id', (req,res)=>{
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((booksUpdated)=>{
            res.json(booksUpdated)
        })
        .catch(err=>{
            res.status('404').json({
                message:'404 Error'
            })
        })
})

router.delete('/:id', (req, res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(bakerDelete=>{
        res.json(bakerDelete)
    })
    .catch(err=>{
        res.status('404').json({
            message:'404 Error'
        })
    })
})
router.post('/', (req, res)=>{
    Book.create(req.body)
    .then(createdBaker=>{
        res.json(createdBaker)
    })
    .catch(err=>{
        res.status('404').json({
            message:'404 Error'
        })
    })
})

module.exports = router