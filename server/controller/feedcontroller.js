const FeedItems= require ('../model/feedItem')
let feedItem1 = new FeedItems( 'hello', 'history', 'history', 'history','history', 'history', 'history');
let feedItem2 = new FeedItems('hello','hello','hello','hello','hello','ello', 'hello');
let feedItem3 = new FeedItems('hello','hello','hello','hello','hello','hello','hello');

let feedItems= [feedItem1, feedItem2, feedItem3];

exports.getAllFeedItems = (req, res) => {
    console.log("hello")
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(feedItems));
}

