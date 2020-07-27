// Object Destructuring
const person = {
    name: 'Matheus',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const { name = 'Anonymous', age } = person
console.log(`${name} is ${age}`)

const { city, temp: temperature } = person.location
if (city && temperature){
    console.log(`Its ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { title, author } = book
const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)

// Array Destructuring
const address = ['106 Nelson Terrace', ' Bridgeport', 'Connectcut', '06610']

const [street, city, state, zip] = address

console.log(`You are in ${street} ${state}`)