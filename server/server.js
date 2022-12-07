console.log('Dark Templar: Adun Toridas, from the shadows I come!')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getCreatures, updateRating, createCreature, deleteCreature} = require('./controller')

app.get('/api/creatures', getCreatures)
app.post('/api/creatures', createCreature)
app.put('/api/creatures/:id', updateRating)
app.delete('/api/creatures/:id', deleteCreature)

app.listen(4500, () =>{
    console.log('Server is online at port 4500')
    console.log('What would you ask of us?')
})