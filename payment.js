const sumPrice = localStorage.getItem("totalPrice");
const fasi = JSON.parse(sumPrice);
const pay = document.getElementById("paymentForm")
const card = document.getElementById("cardNumber")
console.log(fasi)
const button= document.createElement("button");
button.classList.add("submit-button");
button.innerHTML=`<p>Submit Payment ${fasi} GEL</p>`
button.addEventListener("click", (e) => {
    e.preventDefault()

    const success = card.value

    if (success && success[0] !== " " ) {
        alert("Payment processed successfully!")
        
    } else {
        alert("Payment form is empty")
        window.location.reload()
    } 
    
})
pay.appendChild(button);