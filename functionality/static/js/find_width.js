// Created by Ethan Armbruster 11/4/21
// Adjusts the size of the grid columns and the size of the cards for
// different screen sizes.
// noinspection JSSuspiciousNameCombination

function check_width() {
    const post_grid = document.getElementById("blog_post_grid");
    const individual_posts = document.querySelectorAll(".grid-item");
    const card_widthNheight = "300px"

    document.getElementById("demo").innerHTML = "Total Width: " + screen.width + "px";

    if (screen.width <= 375) {
        post_grid.style.gridTemplateColumns = "auto"
        for (let i = 0; i < individual_posts.length; i++) {
            individual_posts[i].style.height = "400px";
            individual_posts[i].style.width = card_widthNheight;
        }


    }
    if (screen.width > 375) {
        post_grid.style.gridTemplateColumns = "auto auto"
        for (let i = 0; i < individual_posts.length; i++) {
            individual_posts[i].style.height = card_widthNheight;
            individual_posts[i].style.width = "400px";
        }

    }


}

