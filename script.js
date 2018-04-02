const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(response => {
    console.log('Server response: ', response);
}).catch( error => {
    console.log('Error, dingus: ', error.message);
});

const newItem = {
    title: 'Dismantle the floorboards of oppression',
    details: 'No longer shall the honorable proletariat be forced to slave away while the bourgeoisie relax and reap the benefits of the working man\'s labors'
}

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(response => {
//     console.log('Add response: ', response);
// });

const itemID1 = '5ac278ac329150131fbbff65';
const itemID2 = '5ac278a3329150131fbbff63';

axios.get(`${BASE_URL}/todos/${itemID1 + API_KEY}`).then(response => {
    console.log('Specific item response: ', response);
});