//Makes text slide in animation
$(".slideIn").hide().show("slow");
//1 Hide spoiler
//2 Add a button
//3 When button pressed
//3.1 Show spoiler
//3.2 Get rid of button
$(".spoiler p").hide();
$(".spoiler").prepend('<button class="button">Description</button><br>');
$("button").click(function() {
    $(".spoiler p").fadeToggle("slow");
});
//Basic Lightbox

//Problem: User when clicking on image goes to a dead end
//Solution: Create and overlay with the large image - Lightbox

//1 Capture the click event on a link to an image
//1.1 Show the overlay
//1.2 Update overlay with the image linked in the link
//1.3 Get child's alt attribite and set caption
//2 Add overlay
//2.1 Add an image
//2.2 Add a caption
//3 When overlay is clicked
//3.1 Hide the overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
$("#gallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});
$overlay.click(function() {
    $overlay.fadeOut("slow");
});
