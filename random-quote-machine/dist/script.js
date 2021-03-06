$(document).ready(function () {});

function inIframe() {try {return window.self !== window.top;} catch (e) {return true;}}

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const quotes = ["If you want a thing done well, do it yourself.", "Education is the key to unlock the golden door of freedom.", "We should not give up and we should not allow the problem to defeat us.", "We don't stop playing because we grow old; we grow old because we stop playing.", "Problems are not stop signs, they are guidelines."];

const authors = ["Napolean Bonaparte", "George Washington Carver", "A.P.J. Abdul Kalam", "George Bernard Shaw", "Robert H. Schuller"];
const changeQuote = (quotes, authors, colors) => {
  let index = Math.floor(Math.random() * quotes.length);
  let colorIndex = Math.floor(Math.random() * colors.length);
  $("#quote-text").animate(
  { opacity: 0 },
  500,
  function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').html("<h3>" + quotes[index] + "</h3>");
    $('#author').html("<h4>-   " + authors[index] + "</h4>");
    $("body").css("background-color", colors[colorIndex]);
    $(".tweet-button").css("background-color", colors[colorIndex]);
    $(".next-button .btn").css("background-color", colors[colorIndex]);
    $("#quote-text").css("color", colors[colorIndex]);
  });


  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[index] + '" -' + authors[index]));
};

changeQuote(quotes, authors, colors);

$(function () {
  $('#new-quote').click(function (cb) {
    changeQuote(quotes, authors, colors);
  });
});

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}