const express = require('express')
const app = express();
app.use(express.static('client/public'));
const bodyParser = require('body-parser')
let feedController = require('./controller/feedControler');
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.route('/api/FeedItem')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem)

app.route('/api/FeedItem/:id')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)



app.get("/api/people", (req, res)=>{
    res.send()
})

app.listen(1337, () => console.log('Listening on port 1337.:)'))
