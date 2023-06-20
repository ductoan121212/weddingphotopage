// function slide

// end slide


// function couting datetime
var startDateTime = new Date(2022, 11, 21, 23, 59, 59, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
  newDate = new Date();
  newStamp = newDate.getTime();
  var diff = Math.round((newStamp - startStamp) / 1000);

  var d = Math.floor(diff / (24 * 60 * 60)); /* though I hope she won't be working for consecutive days :) */
  diff = diff - (d * 24 * 60 * 60);
  var h = Math.floor(diff / (60 * 60));
  diff = diff - (h * 60 * 60);
  var m = Math.floor(diff / (60));
  diff = diff - (m * 60);
  var s = diff;

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}

timer = setInterval(updateClock, 1000);


// play video couple
$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })
  // document ready  
});
// end play video couple


// play audio

function playMusic() {
  var audio = new Audio('./image/audio/EdSheeran-Perfect.mp3');

  document.getElementById("#play-pause-btn")("click", function () {
    if (document.hasClass('fa-volume-xmark')) {
      document.removeClass('fa-volume-xmark');
      document.addClass('fa-volume-high');
      audio.play();
    }
    else {
      document.removeClass('fa-volume-high');
      document.addClass('fa-volume-xmark');
      audio.pause();
    }
  });

  audio.onended = function () {
    $("#play-pause-btn").removeClass('fa-volume-high');
    $("#play-pause-btn").addClass('fa-volume-xmark');
  };
}
