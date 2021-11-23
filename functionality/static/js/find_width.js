// Created by Ethan Armbruster 11/4/21
// Adjusts the size of the grid columns and the size of the cards for
// different screen sizes.
// noinspection JSSuspiciousNameCombination

function check_width() {
    const post_grid = document.getElementById("blog_post_grid");
    const individual_posts = document.querySelectorAll(".grid-item");


    if (screen.width <= 750) {
        post_grid.style.gridTemplateColumns = "auto"
        for (let i = 0; i < individual_posts.length; i++) {
            individual_posts[i].style.height = "450px";
            individual_posts[i].style.width = "300px";
        }


    }
    if (screen.width > 800) {
        post_grid.style.gridTemplateColumns = "auto auto"
        for (let i = 0; i < individual_posts.length; i++) {
            individual_posts[i].style.height = "350px";
            individual_posts[i].style.width = "400px";
        }

    }


}

