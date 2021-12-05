// This Js is Not created by me(CodeWhiteOfficial)
const boxOwners = document.getElementById("owners_list");
const boxheads = document.getElementById("heads_list");
const boxwebdev = document.getElementById("webdev_list");
/*
you can use this api but if you need to create custome api check:
 https://github.com/Hadi-Koubeissi/discord-web-api
*/
const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
    {
        "id": "876770730073792542",
        "post": "Owner of Bot",
        "GHURL": "https://github.com/UltimateCraftDiscord",
        "InstaURL": "https://www.instagram.com/itsWatermelonDevs/",
        "YTURL": "https://www.youtube.com/c/Kp18Gamer"
    }
]
const heads = [
    {
        "id": "592449995035246605",
        "post": "head of Bot",
        "GHURL": "https://github.com/GurkanDev",
        "InstaURL": "",
        "YTURL": ""
    }
]
const webdev = [
    {
        "id": "763750534325731328",
        "post": "Website Develper",
        "GHURL": "https://github.com/CodeWhiteWeb",
        "InstaURL": "",
        "YTURL": "https://www.youtube.com/c/CodeWhiteWeb"
    }
]
for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const ownerList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementOwners.YTURL + "' target='_blank'><button style='color: #000000;'>YouTube</button></a></div></div></div>"
            boxOwners.innerHTML += ownerList;
        });
}
//head
for (let indexOne = 0; indexOne < heads.length; indexOne++) {
    const elementheads = heads[indexOne];

    $.getJSON(API + elementheads.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const headList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementheads.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementheads.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementheads.YTURL + "' target='_blank'><button style='color: #000000;'>YouTube</button></a></div></div></div>"
            boxheads.innerHTML += headList;
        });
}
//webdev
for (let indexOne = 0; indexOne < webdev.length; indexOne++) {
    const elementwebdev = webdev[indexOne];

    $.getJSON(API + elementwebdev.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "../assets/bot.png");
                }, 1000);
            }

            const headList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementwebdev.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementwebdev.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementwebdev.YTURL + "' target='_blank'><button style='color: #000000;'>YouTube</button></a></div></div></div>"
            boxwebdev.innerHTML += headList;
        });
}