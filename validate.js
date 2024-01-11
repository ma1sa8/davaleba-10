const token = localStorage.getItem("token")

if(token){
    if (window.location.href.includes(home.html)) {
    window.location.href = "home.html";
    } else if (window.location.href.includes(movie.html)) {
        window.location.href = "movie.html";
    } else if (window.location.href.includes(payment.html)) {
        window.location.href = "payment.html";
    }

} else  {
    window.location.href = "index.html"
}