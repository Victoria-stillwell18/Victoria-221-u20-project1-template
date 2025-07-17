
const { FeedItem ,FeedItems } = require ('../model/feedItem');

exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-type','application/json');
    res.send(FeedItems)
}

exports.getFeedItem = (req, res) => {
	const item = FeedItems.find(f => f.id == req.params.id);
    item ? res.send(item) : res.status(404).send({error: "404 not found"});
};

exports.saveFeedItem = function(req, res) {
	let newItem = new FeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	FeedItems.push(newItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(newItem);
}

exports.deleteFeedItem = function(req, res) {
    const index = FeedItems.findIndex(f => f.id == req.params.id);
	FeedItems.splice(index, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(FeedItems);
}
