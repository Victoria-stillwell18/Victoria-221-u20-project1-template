
window.addEventListener('load', () => {
    let newsFeed = document.getElementById("newsFeed");
})
window.addEventListener("load", () => {
    window.addEventListener('keypress', checkKeyPress)

})

function checkKeyPress(event) {
    if (event.keyCode == 32) {
        goToLocation('http://my.marist.edu');
    }
}

console.log("Test");
document.addEventListener("DOMContentLoaded", function () {
    const portal = document.getElementById("portal_button");
    if (portal) {
        portal.addEventListener("click", function () {

            goToLocation("http://my.marist.edu");
        }
        );
    }
});

let Feeditem1 = { title: "This is the body of story1", body: "marist university", linkUrl: "http://my.marist.edu", imageUrl: "/images/campus.png" }
let Feeditem2 = { title: "This is story2. Marist news.", body: "This is marist news.", linkUrl: "http://my.marist.edu", imageUrl: "/images/news_pic.jpg" }
let Feeditem3 = { title: "This is story3. Should the campus make more dorms?.", body: "This can benifit incoming studentsand bring the campus more money.", linkUrl: "http://my.marist.edu", imageUrl: "/images/handcock.jpg" }

let currentStories = [Feeditem1, Feeditem2, Feeditem3];
document.addEventListener("DOMContentLoaded", function () {
    let feed = document.getElementById("newsfeed");
    for (i = 0, i > currentStories.length; i++);
    {
        feed.innerHTML += currentStories[i].title + "<br />";
        feed.innerHTML += currentStories[i].body + "<br />";
        feed.innerHTML += currentStories[i].linkUrl + "<br />";
        feed.innerHTML += currentStories[i].imageUrl + "<br />";

    }
});

