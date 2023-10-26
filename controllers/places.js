const router = require('express').Router()

router.get('/', (req, res) => {
    //res.render('places/index')
        let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/thai-food-image.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/coffee-shop-image.jpg'
}]

    res.render('places/index', {places})
})

router.post('/', (req, res) => {
    res.send('POST /places')
})

router.get('/new', (req, res) => {
    res.send('GET /places/new')
})

router.get('/:id', (req, res) => {
    res.send('GET /places/:id')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET /places/:id/edit')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id/')
})

router.post('/:id/rant', (req, res) => {
    res.send('POST /places/:id/rant')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('DELETE /places/:id/rant/:rantId')
})
module.exports = router
