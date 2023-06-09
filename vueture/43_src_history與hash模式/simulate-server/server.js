const express = require('express')
const app = express()
const history = require('connect-history-api-fallback');

app.use(history())
app.use(express.static(__dirname + '/static'))

app.get('/food', (req, res) => {
    res.send({
        name: 'cookie',
        taste: 'sweet'
    })
})

app.listen(5005, (err) => {
    if (!err) {
        console.log('server sucess!')
    }
})