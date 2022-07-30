// Created by Ethan Armbruster 07/30/22
// Adds the ability to view the
// website with dark mode

$(document).ready()
{
    dark_mode_switch();
}

function dark_mode_switch() {
    const btn1_ctn = document.getElementById("dark_mode_container");
    const one = document.querySelector(".fas");
    btn1_ctn.addEventListener("click", script);

    function script(){
        one.classList.toggle("fa-circles");
        dark_mode();
        one.classList.toggle("fa-moon");
        one.classList.toggle("active1");
        btn1_ctn.classList.toggle("changeBg");
    }

}

function dark_mode() {
    const header = document.getElementById('general_header');
    const p_date = document.getElementById('post_date');
    const p_info = document.getElementById('post_info');
    // const p_card = document.getElementById('indiv_post_card');
    const individual_posts = document.querySelectorAll(".grid-item");


    var has_dark_mode = $('body').hasClass("dark");
    if (has_dark_mode) {
        $('body').removeClass("dark");
        header.classList.remove("dark");

        for (let i = 0; i < individual_posts.length; i++) {
            individual_posts[i].classList.remove("dark");
            console.log(individual_posts[i].childNodes[i])
            p_date.classList.remove("dark");
            p_info.classList.remove("dark");
        }

    } else {
        $("body").addClass("dark");
        header.classList.add("dark");
        for (let i = 0; i < individual_posts.length; i++) {
             individual_posts[i].classList.add("dark");
            p_date.classList.add("dark");
            p_info.classList.add("dark");
        }
    }
}