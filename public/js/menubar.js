


 document.querySelector("#menubar-close").onclick = ()=>{
    let menuBar = document.querySelector(".menu-bar")
    menuBar.style.opacity = 0
    menuBar.style.transform = "translateX(-20rem)"
    console.log(menuBar)
}
document.querySelector("#menubar-open").onclick = ()=>{
    let menuBar = document.querySelector(".menu-bar")
    menuBar.style.opacity = 100
    menuBar.style.transform = "translateX(0rem)"
    console.log(menuBar)
}
