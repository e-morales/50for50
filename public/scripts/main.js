// import { google } from "googleapis";

// Preloader
$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
});

// Google Sign-In
function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log(profile);
  let user = {
    email: profile.U3,
    name: profile.ig
  };
  $.ajax({
    type: "POST",
    url: `/api/users`,
    data: user,
    success: handleSignIn,
    error: err => console.log(err)
  });
}

function handleSignIn(response) {
  console.log(response);
  if (response == "user exists") {
  } else {
  }
}

// Loads Smooth Scrolling

$(document).ready(function() {
  // Gets current copyright year
  $("#year").text(new Date().getFullYear());

  // Init Scrollspy
  $("body").scrollspy({
    target: "#main-nav"
  });

  // Smooth Scrolling
  $("#main-nav a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  $("#vmap").vectorMap({
    map: "usa_en",
    backgroundColor: "#57ba98",
    borderColor: "#fff",
    borderOpacity: 0.25,
    borderWidth: 2,
    color: "#182628",
    enableZoom: true,
    hoverColor: "#3b945e",
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#b6d6ff", "#005ace"],
    selectedColor: "#c9dfaf",
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function(element, code, state) {
      $.ajax({
        type: "GET",
        url: `/api/songs/${state}`,
        data: "json",
        success: songs => {
          songs.forEach(song => {
            $(".songholder").html(
              `<div>Now Playing: ${song.artist} - ${song.title}</div>`
            );
            $("iframe").attr("src", `${song.songUrl}`);
          });
        }
      });
    }
  });
});

// url: `/api/users/${userid}/songs/${songId}`
