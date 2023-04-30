document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");


    const search_icon = document.querySelector(".search_icon");
    const search_input = document.querySelector(".search_input");
    const searchbar_container = document.querySelector(".searchbar_container");
    
    const top_button = document.querySelector(".up_icon_small")
    
    const header_logo_dine = document.querySelector(".header_logo_dine");
    const header_text = document.querySelector(".header_text");
    
    if(search_icon){
        search_icon.addEventListener("click",function(){
            header_logo_dine.classList.toggle("hide_item");
            header_text.classList.toggle("hide_item");
            search_input.classList.toggle("hide_item");
        })
    }

    
    // function topFunction() {
    //     console.log("top");
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }
    
    top_button.addEventListener("click", function() {
        console.log("top");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

  });
