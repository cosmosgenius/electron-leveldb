const level = require('level');

const db = level('./db', {
    'valueEncoding': 'json'
});


db.put('test123', 'Holy **** this works!!!', (err) => {
    console.log(err);
    db.get('test123', (err, val) => {
        document.querySelector('main').innerHTML = val;
    })
})
