const db = require("./models");

// songList Test
let songList = [
  {
    artist: "Lynyrd Skynyrd",
    title: "Sweet Home Alambama",
    state: "Alabama",
    songUrl: "https://www.youtube.com/embed/ye5BuYf8q4o"
  },
  {
    artist: "Johnny Horton",
    title: "North to Alaska",
    state: "Alaska",
    songUrl: "https://www.youtube.com/embed/JSt0NEESrUA"
  },
  {
    artist: "The Eagles",
    title: "Take it Easy",
    state: "Arizona",
    songUrl: "https://www.youtube.com/embed/UI3F687SsoU"
  },
  {
    artist: "Bruce Springsteen",
    title: "Mary, Queen of Arkansas",
    state: "Arkansas",
    songUrl: "https://www.youtube.com/embed/GEkHvTcAEoo"
  },
  {
    artist: "Tupac",
    title: "California Love",
    state: "California",
    songUrl: "https://www.youtube.com/embed/5wBTdfAkqGU"
  },
  {
    artist: "John Denver",
    title: "Rocky Mountain High",
    state: "Colorado",
    songUrl: "https://www.youtube.com/embed/eOB4VdlkzO4"
  },
  {
    artist: "Aerosmith",
    title: "I Live in Connecticut",
    state: "Connecticut",
    songUrl: "https://www.youtube.com/embed/qJIauO3PROI"
  },
  {
    artist: "Perry Como",
    title: "Delaware",
    state: "Delaware",
    songUrl: "https://www.youtube.com/embed/NztfOSyCCFM"
  },
  {
    artist: "John Anderson",
    title: "Seminole Wind",
    state: "Florida",
    songUrl: "https://www.youtube.com/embed/W8sh9P3X33w"
  },
  {
    artist: "Ray Charles",
    title: "Georgia on my Mind",
    state: "Georgia",
    songUrl: "https://www.youtube.com/embed/fRgWBN8yt_E"
  },
  {
    artist: "Israel Kamakawiwo’ole",
    title: "Over the Rainbow",
    state: "Hawaii",
    songUrl: "https://www.youtube.com/embed/V1bFr2SWP1I"
  },
  {
    artist: "B-52s",
    title: "Private Idaho",
    state: "Idaho",
    songUrl: "https://www.youtube.com/embed/n7t7cGwN7_0"
  },
  {
    artist: "The Blues Brothers",
    title: "Sweet Home, Chicago",
    state: "Illinois",
    songUrl: "https://www.youtube.com/embed/79vCiXg3njY"
  },
  {
    artist: "John Mellencamp",
    title: "Small Town",
    state: "Indiana",
    songUrl: "https://www.youtube.com/embed/0CVLVaBECuc"
  },
  {
    artist: "Joni Mitchell",
    title: "The Dry Cleaner from Des Moines",
    state: "Iowa",
    songUrl: "https://www.youtube.com/embed/JnpyCEUESEw"
  },
  {
    artist: "Wilbert Harrison",
    title: "Kansas City",
    state: "Kansas",
    songUrl: "https://www.youtube.com/embed/f8tZO97uhyE"
  },
  {
    artist: "Elvis Presley/Patsy Cline",
    title: "Blue Moon of Kentucky",
    state: "Kentucky",
    songUrl: "https://www.youtube.com/embed/r7M0CmkJ-2o"
  },
  {
    artist: "Chuck Berry",
    title: "John B. Goode",
    state: "Lousiana",
    songUrl: "https://www.youtube.com/embed/ZFo8-JqzSCM"
  },
  {
    artist: "Mountain Goats",
    title: "Going to Maine",
    state: "Maine",
    songUrl: "https://www.youtube.com/embed/MZJVCOSS9H8"
  },
  {
    artist: "Hairspray",
    title: "Good Morning, Baltimore",
    state: "Maryland",
    songUrl: "https://www.youtube.com/embed/lY54kWJQBo8"
  },
  {
    artist: "Dropkick Murphys",
    title: "Shipping Up To Boston",
    state: "Massachushetts",
    songUrl: "https://www.youtube.com/embed/x-64CaD8GXw"
  },
  {
    artist: "Kiss",
    title: "Detroit Rock City",
    state: "Michigan",
    songUrl: "https://www.youtube.com/embed/iZq3i94mSsQ"
  },
  {
    artist: "Weird Al Yankovic",
    title: "The Biggest Ball of Twine in Minnesota",
    state: "Minnesota",
    songUrl: "https://www.youtube.com/embed/yKeHQpT5wVE"
  },
  {
    artist: "Led Zeppelin",
    title: "When the Levee Breaks",
    state: "Mississippi",
    songUrl: "https://www.youtube.com/embed/uwiTs60VoTM"
  },
  {
    artist: "Louie Armstrong and Bessie Smith",
    title: "St. Louis Blues",
    state: "Missouri",
    songUrl: "https://www.youtube.com/embed/D2TUlUwa3_o"
  },
  {
    artist: "Frank Zappa",
    title: "Montana",
    state: "Montana",
    songUrl: "https://www.youtube.com/embed/smZA9Jv3qH0"
  },
  {
    artist: "Lady Gaga",
    title: "You and I",
    state: "Nebraska",
    songUrl: "https://www.youtube.com/embed/X9YMU0WeBwU"
  },
  {
    artist: "Elvis Presley",
    title: "Viva Las Vegas",
    state: "Nevada",
    songUrl: "https://www.youtube.com/embed/ui0EgRsFVN8"
  },
  {
    artist: "Sonic Youth",
    title: "New Hampshire",
    state: "New Hampshire",
    songUrl: "https://www.youtube.com/embed/ui0EgRsFVN8"
  },
  {
    artist: "Bruce Springsteen",
    title: "Atlantic City",
    state: "New Jersey",
    songUrl: "https://www.youtube.com/embed/M3eu1gW-bQ8"
  },
  {
    artist: "Johnny Cash",
    title: "New Mexico",
    state: "New Mexico",
    songUrl: "https://www.youtube.com/embed/9iRsY5vCkfw"
  },
  {
    artist: "Frank Sinatra",
    title: "Theme From New York, New York",
    state: "New York",
    songUrl: "https://www.youtube.com/embed/EUrUfJW1JGk"
  },
  {
    artist: "Petey Pablo",
    title: "Raise Up",
    state: "North Carolina",
    songUrl: "https://www.youtube.com/embed/tHnA94-hTC8"
  },
  {
    artist: "Lyle Lovett",
    title: "North Dakota",
    state: "North Dakota",
    songUrl: "https://www.youtube.com/embed/xvTvnltNmfc"
  },
  {
    artist: "Electric Six",
    title: "Escape From Ohio",
    state: "Ohio",
    songUrl: "https://www.youtube.com/embed/e7SuBBpLX-A"
  },
  {
    artist: "Merle Haggard",
    title: "Okie From Muskogee",
    state: "Oklahoma",
    songUrl: "https://www.youtube.com/embed/68cbjlLFl4U"
  },
  {
    artist: "Loretta Lynn",
    title: "Portland, Oregon",
    state: "Oregon",
    songUrl: "https://www.youtube.com/embed/2SHAX4z4sLg"
  },
  {
    artist: "Bruce Springsteen",
    title: "Streets of Philadelphia",
    state: "Pennsylvania",
    songUrl: "https://www.youtube.com/embed/4z2DtNW79sQ"
  },
  {
    artist: "Family Guy",
    title: "Road to Rhode Island",
    state: "Rhode Island",
    songUrl: "https://www.youtube.com/embed/mzYnQoyIFPY"
  },
  {
    artist: "James P. Johnson",
    title: "The Charleston",
    state: "South Carolina",
    songUrl: "https://www.youtube.com/embed/3kJWdUFzL0Y"
  },
  {
    artist: "Johnny Cash",
    title: "Big Foot",
    state: "South Dakota",
    songUrl: "https://www.youtube.com/embed/mEwWXNN6bIs"
  },
  {
    artist: "Three Six Mafia",
    title: "Hard Out Here For a Pimp",
    state: "Tennessee",
    songUrl: "https://www.youtube.com/embed/_Cr0nP3k_p4"
  },
  {
    artist: "Gene Autry",
    title: "Deep in the Heart of Texas",
    state: "Texas",
    songUrl: "https://www.youtube.com/embed/IQIagUuGn5Q"
  },
  {
    artist: "The Beach Boys",
    title: "Salt Lake City",
    state: "Utah",
    songUrl: "https://www.youtube.com/embed/Lv89vHZwrSI"
  },
  {
    artist: "John Blackburn and Karl Suessdorf",
    title: "Moonlight in Vermont",
    state: "Vermont",
    songUrl: "https://www.youtube.com/embed/cyyRi3l7E_k"
  },
  {
    artist: "Jerry Lee Lewis",
    title: "Carry me Back to Ol' Virginia",
    state: "Virginia",
    songUrl: "https://www.youtube.com/embed/QdTnCN0a9nQ"
  },
  {
    artist: "Sir Mix A Lot",
    title: "Posse on Broadway",
    state: "Washington",
    songUrl: "https://www.youtube.com/embed/SBPpy_SVV_0"
  },
  {
    artist: "Take me Home, Country Roads",
    title: "John Denver",
    state: "West Virginia",
    songUrl: "https://www.youtube.com/embed/1vrEljMfXYo"
  },
  {
    artist: "Ella Fitzgerald",
    title: "My Cousin in Milwaukee",
    state: "Wisconsin",
    songUrl: "https://www.youtube.com/embed/0OWODoIVOOA"
  },
  {
    artist: "Chris LeDoux",
    title: "Paint Me Back Home in Wyoming",
    state: "Wyoming",
    songUrl: "https://www.youtube.com/embed/k1cTJF5crmU"
  }
];

let fakeUser = {
  name: "James John",
  songs: []
};

// stores the songs
db.Song.deleteMany({}, (err, songs) => {
  if (err) console.error(err);
  console.log(`Deleted all songs.`);
  db.Song.create(songList, (err, newSongs) => {
    if (err) console.error(err);
    console.log(newSongs);
  });
});

// Create User and associate with songs?

db.User.deleteMany({}, (err, deletedUser) => {
  if (err) console.error(err);
  console.log("Deleted Users");
  db.User.create(fakeUser, (err, newUser) => {
    if (err) console.error(err);
    console.log(newUser);
  });
});
