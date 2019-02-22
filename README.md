# 50 for 50
## 50 songs for 50 states

This is a full stack web application that plays the 50 most popular songs in each state. It features a clickable map of the U.S. which responds with a YouTube video of the song. Users can login via Google Login and add/remove songs to their own playlist with MongoDB. 

### https://serene-refuge-94124.herokuapp.com/
*

##Tech Used
* HTML & CSS
* BootStrap
* JavaScript & JQuery
* Node.js & Express
* Mongoose & MongoDB


## Existing Features
* Clickable JQuery map (JQVmap)
* Google Login
* Custom Playlist 
    * User can add/remove songs

## Planned Features
* Autoplay video
* Sliding sidebar/menu for player and playlist
* YouTube API
    * YouTube Player/Playlist
* Expand Globally (Regions/Countries)
* Song search functionality
* Optimize for mobile devices / smaller screens
* Global Playlist


```.loader {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
}

.loader .inner {
    width: 100%;
    height: 100%;
    background: url(../images/preloader.gif) center center no-repeat;
}

$(window).on("load", function () {
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });
});
```



***Map section quote & song data from "USA TODAY - Best Song of Every State"

