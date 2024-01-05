const token = localStorage.getItem("token")

if(token){
    if (window.location.href.indexOf("home.html") === -1) {
    window.location.href = "home.html";
}

} else  {
    window.location.href = "index.html"
}