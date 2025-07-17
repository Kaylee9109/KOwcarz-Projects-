const FeedItem = require('../model/feedItem').FeedItem;

let feedItem1 = new FeedItem('hello', 'history', 'history', 'history', 'history', 'history', 'history');
let feedItem2 = new FeedItem('hello', 'hello', 'hello', 'hello', 'hello', 'ello', 'hello');
let feedItem3 = new FeedItem('hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello');

const allFeedItems = [feedItem1, feedItem2, feedItem3];

exports.getAllFeedItems = (req, res) => {
  console.log("Fetching all feed items...");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(allFeedItems));
};

// POST
exports.saveFeedItemHandler = (req, res) => {
  let newItem = new FeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
  allFeedItems.push(newItem);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(newItem));
};

// GET by ID
exports.getFeedItem = (req, res) => {
  const id = parseInt(req.params.feedItemId);

  if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: "Feed item not found" }));
    return;
  }

  const item = allFeedItems[id];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(item));
};

// DELETE
exports.deleteFeedItem = (req, res) => {
  const id = parseInt(req.params.feedItemId);

  if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: "Feed item not found" }));
    return;
  }

  const deleted = allFeedItems.splice(id, 1)[0];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: "Feed item deleted", deleted }));
};

// PATCH
exports.updateFeedItem = (req, res) => {
  const id = parseInt(req.params.feedItemId);

  if (isNaN(id) || id < 0 || id >= allFeedItems.length) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ error: "Feed item not found" }));
    return;
  }

  const item = allFeedItems[id];

  if (req.body.title) item.title = req.body.title;
  if (req.body.body) item.body = req.body.body;
  if (req.body.linkUrl) item.linkUrl = req.body.linkUrl;
  if (req.body.imageUrl) item.imageUrl = req.body.imageUrl;

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(item));
};
