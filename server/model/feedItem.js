class FeedItem {
    constructor(title, body, linkUrl, imageUrl) {
        this.id = FeedItem.incrementId();
        this.title = title
        this.body = body
        this.linkUrl = linkUrl
        this.imageUrl = imageUrl
    }
    static incrementId() {
        FeedItem.currentId = (FeedItem.currentId || 0) +1;
        return FeedItem.currentId;
    }
}

let FeedItems = [
    new FeedItem("This is the body of story1", "marist university", "http://my.marist.edu", "/images/campus.png"),
    new FeedItem("This is story2. Marist news.", "This is marist news.", "http://my.marist.edu", "/images/news_pic.jpg"),
    new FeedItem("This is story3. Should the campus make more dorms?.", "This can benifit incoming studentsand bring the campus more money.", "http://my.marist.edu", "/images/handcock.jpg")
];

module.exports = {FeedItem, FeedItems};