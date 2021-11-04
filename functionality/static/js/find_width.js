// Created by Ethan Armbruster 11/4/21
// Adjusts the size of the grid columns and the size of the cards for
// different screen sizes.

function check_width() {
    const post_grid = document.getElementById("blog_post_grid");
    const individual_posts = document.getElementById("indiv_post_card");
    document.getElementById("demo").innerHTML = "Total Width: " + screen.width + "px";


    if (screen.width <= 375) {
        post_grid.style.cssText = "grid-template-columns: auto;"
        individual_posts.style.cssText = " height: 400px; width:300px;";
        // post_grid.style.gridTemplateColumns = "auto"
        // individual_posts.style.height = "400px"
        // individual_posts.style.width = "300px"
    }
    if (screen.width > 375) {
        post_grid.style.cssText = "grid-template-columns: auto auto;"
        individual_posts.style.cssText = " height: 300px; width:500px;";
        // post_grid.style.gridTemplateColumns = "auto auto"
        // individual_posts.style.width = "500px"
        // individual_posts.style.height = "300px"

    }

}
