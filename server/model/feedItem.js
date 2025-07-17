// server/model/feedItem.js
class FeedItem {
  constructor(title, body, linkUrl, imageUrl) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}

// Export the class so other files can use it
module.exports = FeedItem;

