console.log('Goliath Online!')

let input = document.querySelector('#form')
let submitBtn = document.querySelector('#submit')

const baseUrl = 'http://localhost:4500'

console.log('Go Ahead TACCOM.')

const getCreatures = () => {
    console.log('Weapons hot.')
    axios.get(`${baseUrl}/api/creatures`)
    .then((res) => {
        displayCreatures(res.data)
    })
    .catch((err) => {
        console.log('Assistance Required!', err)
    })
}

const createCreature = (body) => {
    axios.post(`${baseUrl}/api/creatures`, body)
        .then((res) => {
            displayCreatures(res.data)
        })
        .catch((err) => {
            console.log('Assistance Required!', err)
        })
}

const updateRating = (id, type) => {
    console.log('ping')
    axios.put(`${baseUrl}/api/creatures/${id}`, {type})
    .then((res) => {
        displayCreatures(res.data)
    })
    .catch((err) => {
        console.log('Assistance Required!', err)
    })
}

const deleteCreature = (id) => {
    axios.delete(`${baseUrl}/api/creatures/${id}`)
    .then((res) => {
        displayCreatures(res.data)
    })
    .catch((err) => {
        console.log('Assistance Required!', err)
    })
}


const submitHandler = (e) => {
    e.preventDefault()

    console.log('Acknowledged H.Q.')

    let name = document.querySelector('#name')
    let species = document.querySelector('#species')
    let image = document.querySelector('#image')

    let bodyObj = {
        name: name.value,
        species: species.value,
        image: image.value
    }

    console.log('Nav-comm locked.')

    createCreature(bodyObj)

    name.value = ''
    species.value = ''
    image.value = ''

    console.log('Comm-link online.')
}

const createCreatureCard = (creature) => {

console.log('Confirmed.')

 const creatureContainer = document.querySelector('#creature-container')

 const creatureCard = document.createElement('div')

 creatureCard.classList.add('creat-card')

 creatureCard.innerHTML = `
 <img alt='creature cover image' src=${creature.image} class='creature-image'/>
 <p class='name'>${creature.name}</p>
 <p class='species'>${creature.species}</p>
 <div class='btn-container'>
     <button class='up-btn' onclick="updateRating(${creature.id}, 'up')">Up Vote</button>
     <p class='creature-rating'>${creature.rating}</p>
     <button class='dwn-btn' onclick="updateRating(${creature.id}, 'down')">Down Vote</button>
 </div>
 <button class='delete' onclick='deleteCreature(${creature.id})'>Delete</button>
 `

 creatureContainer.appendChild(creatureCard)

 console.log('Channel Open.')
}

const displayCreatures = (arr) => {
    console.log('Target Designated.')

    const creatureContainer = document.querySelector('#creature-container')

    creatureContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createCreatureCard(arr[i])
    }

    console.log('Systems Functional.')
}

submitBtn.addEventListener('click', submitHandler)

getCreatures()