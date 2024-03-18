let navbar = document.querySelector('.navbar');
let menu_btn = document.querySelector('#menu-btn');

let cart_item = document.querySelector('.cart-items-container');
let cart_btn = document.querySelector('#cart-btn');

let searchForm = document.querySelector('.search-form');
let search_btn = document.querySelector('#search-btn');

menu_btn.onclick = () =>{
    navbar.classList.toggle('active');
    cart_item.classList.remove('active');
    searchForm.classList.remove('active');
}

cart_btn.onclick = () =>{
    cart_item.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

search_btn.onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart_item.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cart_item.classList.remove('active');
    searchForm.classList.remove('active');
}





