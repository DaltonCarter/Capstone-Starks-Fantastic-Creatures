const creatures = require('./db.json')
let globalId = 5

module.exports = {
    getCreatures: (req, res) => {
    try {
        console.log('I will comply.')
        res.status(200).send(creatures)
    } catch (error) {
        console.log('Battle is upon us!', error)
        res.sendStatus(400)
    }
    },

    createCreature: (req, res) => {
        console.log('Clever, I am intrigued.')
        let {name, species, image} = req.body

        let newCreature = {
            id: globalId,
            name,
            species,
            image,
            rating: 50
        }
        creatures.push(newCreature)
        res.status(200).send(creatures)
        globalId++
        console.log('Zerashk Gulida.')

    },

    updateRating: (req, res) => {
        let {type} = req.body
        let {id} = req.params
        let index = creatures.findIndex(creature => creature.id === +id)

        if(creatures[index].rating === 100 && type === 'up'){
            console.log(' I... cannot maintain!')
        res.status(400).send('It is inadvisable to exceed 100!')
        } else if (creatures[index].rating === 0 && type === 'down') {
            console.log('Raszagal, watch over us...')
            res.status(400).send('It is inadvisable to go below 0!')
        } else if (type === 'up') {
            console.log('Khatum.')
            creatures[index].rating++
            res.status(200).send(creatures)
        } else if (type === 'down') {
            console.log('I strike from the shadows!')
            creatures[index].rating--
            res.status(200).send(creatures)
        }else {
            console.log('By the shadows of Shakuras...')
            res.status(400)
        }
    },

    deleteCreature: (req, res) => {
        console.log('Alakor de zhakan!')
        let{id} = req.params
        let index = creatures.findIndex(creature => creature.id === +id)
        creatures.splice(index, 1)
        res.status(200).send(creatures)
        console.log("Sok'dash salahk")
    }

}