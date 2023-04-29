const search_icon = document.querySelector(".search_icon");
const search_input = document.querySelector(".search_input");
const searchbar_container = document.querySelector(".searchbar_container");

const header_logo_dine = document.querySelector(".header_logo_dine");
const header_text = document.querySelector(".header_text");

search_icon.addEventListener("click",function(){
    header_logo_dine.classList.toggle("hide_item");
    header_text.classList.toggle("hide_item");
    search_input.classList.toggle("hide_item");
})