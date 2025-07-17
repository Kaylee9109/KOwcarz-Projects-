const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const feedcontroller = require('./controller/feedcontroller');

const app = express();

// Serve static files from the 'client/public' directory
app.use(express.static(path.join(__dirname, 'client', 'public')));

// Parse incoming JSON requests
app.use(bodyParser.json({ type: 'application/json' }));

// Serve HTML files from the 'client/views' directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'views', 'index.html'));
});

app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'views', 'feed.html'));
});

// API routes for FeedItems
app.route('/api/FeedItems')
  .get(feedcontroller.getAllFeedItems)
  .post(feedcontroller.saveFeedItemHandler);

// API routes for individual FeedItems
app.route('/api/feedItem/:feedItemId')
  .get(feedcontroller.getFeedItem)
  .patch(feedcontroller.updateFeedItem)
  .delete(feedcontroller.deleteFeedItem);

// Start the server
app.listen(1337, () => {
  console.log('Server running on port 1337.');
});


