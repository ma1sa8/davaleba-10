document.getElementById("loginForm").addEventListener("submit",  function(e){
    const user = [
        {
            username: "giorgi",
            password: "giorgi123"
        },
        {
            username: "nikolozi",
            password: "nika123"
        },
        {
            username: "irakli",
            password: "irakli123"
        },
        {
            username: "mevludi",
            password: "mevludi123"
        },
    ]
    e.preventDefault()
    const userName = document.getElementById("username").value
    const passWord = document.getElementById("password").value

    // ორივე მეთოდი მუშაობს
    for(let i = 0; i < user.length - 1; i++){
        if(userName === user[i].username &&  passWord === user[i].password){
            const token = Math.random().toString(36).substr(2)
            console.log(token)
            localStorage.setItem("token", token)
            window.location.href = "./home.html"
        }
    }
    // user.forEach(user => {
    //     if(userName === user.username &&  passWord === user.password){
    //         const token = Math.random().toString(36).substr(2)
    //         console.log(token)
    //         localStorage.setItem("token", token)
    //         window.location.href = "./home.html"
    //     } 
    // })
    const token = localStorage.getItem("token")
    if(token){
        
    } else { 
        alert("Wrong username or password")
    }
})
