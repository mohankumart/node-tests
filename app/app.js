const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.get('/test', (req, res)=>{
    res.send({
        'name': 'mohan'
    })
})

app.get('/users', (req, res) => {
    res.send([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Mohan',
        age: 32
    }
    ])
})

app.listen(3000)

module.exports.app = app;