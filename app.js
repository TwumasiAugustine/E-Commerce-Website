//Count Down Timer

let daysBox = document.getElementById('days-box');
let hoursBox = document.getElementById('hours-box');
let minsBox = document.getElementById('min-box');
let secsBox = document.getElementById('sec-box');

let countDownDate = new Date("February 5, 2024").getTime();

let timer = setInterval(function()  {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) /1000); 

    daysBox.innerHTML = days + " Days";
    hoursBox.innerHTML = hours + " Hours";
    minsBox.innerHTML = minutes + " Mins";
    secsBox.innerHTML = seconds + " Secs";
});

// Display Different Brand Names At Regular Intervals

let brandNames = ["Off White", "Louis Vuitton", "Paul Zara", "Balanciaga", "Gucci", "Dolce & Gabbana", "Fila", "Polo", "Lacoste", "Adidas", "Jordan", "Dior"];

let Brand = document.getElementById("brand");

setInterval(function() {
    let myBrand = brandNames[Math.floor(Math.random() * brandNames.length)];
    Brand.innerHTML = myBrand;
}, 10000);
    
// Sticky Header

window.onscroll = function() {
    myFunction();
}

let header = document.getElementById("third-header");
let sticky = header.offsetTop;

function  myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Slide Images

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    
    let i;
    let dots = document.getElementsByClassName("dot");
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    ;
}


//remove cart
let removeCartItemButton = document.getElementsByClassName("remove")
for (let i = 0; i < removeCartItemButton.length; i++) {
    let button = removeCartItemButton[i];
    button.addEventListener("click", function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove();
        
    })
}
// Update Price On Quantity Change
    
let total = 0;
let price = document.getElementsByClassName("price"); 
let newPrice = document.getElementsByClassName('new-price');
let changeQty = document.getElementsByClassName('item-qty');
let subtotalEl = document.getElementsByClassName('cart-subtotal-price')[0];
let taxEl = document.getElementsByClassName('cart-tax')[0];
let totalEl = document.getElementsByClassName('cart-total')[0];

for(let i = 0; i < changeQty.length; i++) {
    let button = changeQty[i];
    button.addEventListener('click', function() {
        let quantity = changeQty[i].value
        let originalPrice = parseFloat(price[i].innerHTML.replace('$', ''))
        let updatedPrice =  quantity * originalPrice
        newPrice[i].innerHTML = "$" + updatedPrice.toFixed(2);
            total = total + (updatedPrice)
            subtotalEl.innerHTML =  "$" + total.toFixed(2);
            taxEl.innerHTML = "$" + ( 14/100 * total).toFixed(2);
            totalEl.innerHTML = "$"  + (total + 14/100 * total).toFixed(2);
        console.log(totalEl);
        })
    }

// add the new price to the subtotal




// function updateCartTotal(){
//     let cartListContainer = document.getElementsByClassName("cart-list")[0]
//     let cartItems = cartListContainer.getElementsByClassName('cart-items')
//     let total = 0;
//     for(let i = 0; i < cartItems.length; i++) {
//         let cartItem = cartItems[i]
//         let priceElement = cartItem.getElementsByClassName('new-price')[0]
//         let quantityElement = cartItem.getElementsByClassName('item-qty')[0]
//         let price = parseFloat(priceElement.innerHTML.replace('$', ''))
//         let quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     document.getElementsByClassName('new-price').innerHTML = total
// }
// updateCartTotal();
// const button = document.querySelectorAll('.cart')
// let items = document.querySelectorAll('.items')

// for( let i = 0; i < items.length; i++ ) {
//     button.forEach(button =>  {
//         button.addEventListener('click', function()  {
//             let itemsContainer = document.getElementsByClassName(".itemsContainer");
//             let contentCard = document.getElementById("cart-content")
//             }
//         );
//     }
//     );
// }

