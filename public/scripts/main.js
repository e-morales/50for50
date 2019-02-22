// import { google } from "googleapis";
let profile;
// Preloader
$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
});

// Google Sign-In
function onSignIn(googleUser) {
  profile = googleUser.getBasicProfile();
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
  localStorage.userId = response._id;
}

function signOut(e) {
  e.preventDefault();
  console.log("sign out");
  localStorage.userId = null;
  var auth2 = gapi.auth2.getAuthInstance();

  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}

$("#signOutLink").on("click", signOut);

if (localStorage.userId) {
  displaySongs();
}

function displaySongs() {
  $.ajax({
    type: "GET",
    url: `/api/users/${localStorage.userId}`,
    success: response => {
      console.log(response);
      response.songs.forEach(song => {
        $("tbody").append(`<tr id=${song._id}>
            <th scope="row"></th>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td><input id="deleteSong" data-id=${
              song._id
            } type="button" value="Delete"></td>
        </tr>`);
      });
    },
    error: err => console.log(err)
  });
}

// Favorites Song

$("#favoriteSong").on("click", (event, googleUser) => {
  event.preventDefault();
  songId = $("#favoriteSong").data("id");

  $.ajax({
    type: "POST",
    url: `/api/users/${localStorage.userId}/songs/${songId}`,
    success: response => {
      console.log(response);
      if (response != "song already in collection") {
        let song = response.songs[response.songs.length - 1];

        $("tbody").append(`<tr id=${song._id}>
            <th scope="row"></th>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td><input id="deleteSong" data-id=${
              song._id
            } type="button" value="Delete"></td>
        </tr>`);
      }
    },
    error: err => console.error(err)
  });
});

// Delete Song
$("tbody").on("click", "#deleteSong", function(e) {
  e.preventDefault();
  console.log($(this));
  let songId = $(this).attr("data-id");
  console.log(songId);
  $.ajax({
    method: "DELETE",
    url: `/api/users/${localStorage.userId}/songs/${songId}`,
    success: response => {
      console.log(response);
      $(`tr[id=${songId}]`).remove();
    }
  });
});

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

  // Map Functionality

  $("#vmap").vectorMap({
    map: "usa_en",
    backgroundColor: "#a5bfdd",
    borderColor: "#818181",
    borderOpacity: 0.25,
    borderWidth: 1,
    color: "#f4f3f0",
    enableZoom: true,
    hoverColor: "#c9dfaf",
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
            $("iframe").attr("src", `${song.songUrl}`);
            $("#favoriteSong").data("id", `${song._id}`);
          });
        }
      });
    }
  });
});
