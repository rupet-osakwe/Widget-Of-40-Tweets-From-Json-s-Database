TWEETS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=40";
function plusTweets() {
  fetch(TWEETS_URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const tweetScreen = document.querySelector(".tweet-screen");
      if (data.length > 0) {
        data.forEach((post) => {
          const singleTweet = document.createElement("tweet");
          singleTweet.classList.add(".tweet");

          const headerEl = document.createElement("b");
          headerEl.innerText = post.title;
          headerEl.style.color = "blue";
          headerEl.style.fontFamily = "aerial";

          const tweetBodyEl = document.createElement("article");
          tweetBodyEl.innerText = post.body;

          singleTweet.appendChild(headerEl);
          singleTweet.appendChild(tweetBodyEl);

          tweetScreen.appendChild(singleTweet);
        });
      }
    });
}
window.addEventListener("DOMContentLoaded", plusTweets);
