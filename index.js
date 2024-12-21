
console.log("Script is running");

document.querySelector('.cancel').style.display = "none" ;

document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    // if(document.querySelector(".sidebar").classList.contains("sidebarGo"))
    // {
    //     document.querySelector(".menu").style.display = "inline"
    //     document.querySelector(".cancel").style.display = "none"
    // }
    // else
    // {
    //     document.querySelector(".cancel").style.display = "inline"
    //     setTimeout(() => {
    //         document.querySelector(".menu").style.display = "none"
            
    //     }, 300);
    // }
}
)