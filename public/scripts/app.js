$(document).ready(function(event) {

  function showError(message){
    alert(message);
  };

function createTweetElement(tweet) {
  var $article = $( "<article class='tweet'>")
  var $header = $('<header>');
  var $name = $('<h2 class="name">'+tweet.user.name+'</h2>');
  var $handle = $('<h3 class="handle">'+tweet.user.handle+'</h3>');
  var $avatars = $("<img class='avatar' src=" +tweet.user.avatars.regular+">");
  var $p = $('<p>').text(tweet.content.text);
  var $mainBody = $("<div class='mainbody'>");
  var $flag = $("<i class='fa fa-flag'>");
  var $retweet = $("<i class='fa fa-retweet'>");
  var $heart = $("<i class='fa fa-heart'>");
  var $footer = $("<footer>");
  var $timestamp = $("<h3 class='timeStamp'>"+ moment(tweet.created_at).fromNow()+ "</h3>");

  $header.append($avatars).append($handle).append($name);
  $mainBody.append($p);
  $footer.append($flag).append($retweet).append($heart).append($timestamp);

  $article.append($header).append($mainBody).append($footer);

  return $article;
}

function renderTweets(tweets) {
  $('#all-tweets').empty();
  for (var i in tweets){
    var article = createTweetElement(tweets[i]);
    $('#all-tweets').prepend(article);
  }
  // $('#all-tweets').prepend(tweets.map(createTweetElement));
}
function loadTweets(){
  $.ajax({
    method: 'GET',
    url: '/tweets',
    dataType: 'json',
    success: function (data) {
    console.log("ajax get successful")
    renderTweets(data);
    },
    error: function() {
      console.log("Error");
    }
  });
};

$('.composeButton').on('click', function(){
    $('.new-tweet').slideToggle(200);
    $('#tweetContent').focus();
  });


 $("form").on('submit', function(event){
    event.preventDefault();
    var twt = $('#tweetContent').val();
    var twtObj = {
      text: twt
    };
    if (twt.length === 0) {
      showError("You didn't post a tweet");
      return;
    } else if (twt.length > 140) {
      showError("Tweet cannot be more than 140 characters");
      return;
    } else if ($.trim(twt) === ""){
      showError("You can't submit empty content")
      return;
    } else
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: twtObj,
      dataType: 'text',
      success: function(data){
        console.log('ajax post successful');
        console.log(data);
        loadTweets();
        $('#tweetContent').val('');
        $('#charCounter').html('140');
      },
      error: function(response){
        console.log('Error');
        console.log(response);
      }
    });
  });



loadTweets();
});



