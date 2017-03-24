/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function() {


function createTweetElement(tweet) {
  var $article = $( "<article class='tweet'>")
  var $header = $('<header>');
  var $name = $('<h2 class="name">'+tweet.user.name+'</h2>');
  var $handle = $('<h3 class="handle">'+tweet.user.handle+'</h3>');
  var $avatars = $("<img class='avatar' src=" +tweet.user.avatars.regular+">");
  var $p = ('<p>'+tweet.content.text+'</p>');
  var $mainBody = $("<div class='mainbody'>");
  var $flag = $("<i class='fa fa-flag'>");
  var $retweet = $("<i class='fa fa-retweet'>");
  var $heart = $("<i class='fa fa-heart'>");
  var $footer = $("<footer>");
  var $timestamp = $("<h3 class='timeStamp'>"+tweet.created_at+"</h3>");

  $header.append($avatars).append($handle).append($name);
  $mainBody.append($p);
  $footer.append($flag).append($retweet).append($heart).append($timestamp);

  $article.append($header).append($mainBody).append($footer);

  return $article;
}

function renderTweets(tweets) {
 //  tweets.map(createTweetElement)
 // for(var i in tweets) {
 //  var article = createTweetElement(tweets[i]);
  $('#all-tweets').prepend(tweets.map(createTweetElement));
 }


renderTweets(tweetData);

});