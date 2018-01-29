$(document).ready(function() {
  function genrateQuote() {
    console.log("works here");
    $.getJSON("https://amanpaix.github.io/Random-Quotes/API/quote.json", function(json) {

      var newQuote = Math.floor((Math.random() * json.length));
      $("#message").html("&ldquo;" + json[newQuote].quote + "&rdquo;").fadeOut(0).fadeIn(2000);
      $("#author").html(json[newQuote].author).fadeOut(0).fadeIn(2000);
      $("#by").fadeOut(0).fadeIn(2000);
      console.log(json[newQuote].quote);
      console.log(json[newQuote].author);
    });
  }

  function tweet() {
    var tweetContent = $("#message").html() + " #quote";
    var tweetLink = "https://twitter.com/home?status=" + encodeURIComponent(tweetContent);
    window.open(tweetLink , "_blank");
    console.log(tweetContent);
  }

  function post() {

  }

  genrateQuote();

  $(".qbtn").on("click" , genrateQuote);
  $(".tbtn").on("click" , tweet);
  // $(".fbtn").on("click" , post);
});
