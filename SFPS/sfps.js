console.log('Goliath Online!')

let cart = 0;

let total = 0;

let clear = document.querySelector("#clear-btn");

let check = document.querySelector("#check-btn");

let cartBookOne = document.querySelector("#drag-book-btn");

let cartBookTwo = document.querySelector("#otter-book-btn");

let cartWolfChow = document.querySelector("#wolf-chow-btn");

let cartTreats = document.querySelector("#treats-btn");

let cartPerch = document.querySelector("#phoenix-btn");

let cartBed = document.querySelector("#bed-btn");

let cartSaddle = document.querySelector("#saddle-btn");

let cartPlush = document.querySelector("#plushie-btn");

let infoBookOne = document.querySelector("#read-drag-btn");

let infoBookTwo = document.querySelector("#read-otter-btn");

let infoChow = document.querySelector("#wolf-detail-btn");

let infoTreats = document.querySelector("#treats-detail-btn");

let infoPerch = document.querySelector("#perch-detail-btn");

let infoBed = document.querySelector("#bed-detail-btn");

let infoSaddle = document.querySelector("#saddle-detail-btn");

let infoPlush = document.querySelector("#plushie-detail-btn");

let signUpForm = document.querySelector(".email-sign-up");

let emailInput = document.querySelector("input");

let signUpBtn = document.querySelector("#sign-up");

let footer = document.querySelector("footer");

let cartText = document.querySelector("#cart-count");

let priceText = document.querySelector("#price-count");

let one = document.querySelector("#one");

let two = document.querySelector("#two");

let three = document.querySelector("#three");

let four = document.querySelector("#four");

let five = document.querySelector("#five");

let six = document.querySelector("#six");

let seven = document.querySelector("#seven");

let eight = document.querySelector("#eight");

console.log('Go Ahead TACCOM.')

function toggleBookOne() {
    one.classList.toggle("opened");
  }
  
  infoBookOne.addEventListener("click", toggleBookOne);
  
  function toggleBooktwo() {
    two.classList.toggle("opened");
  }
  
  infoBookTwo.addEventListener("click", toggleBooktwo);
  
  function toggleThree() {
    three.classList.toggle("opened");
  }
  
  infoChow.addEventListener("click", toggleThree);
  
  function toggleFour() {
    four.classList.toggle("opened");
  }
  
  infoTreats.addEventListener("click", toggleFour);
  
  function toggleFive() {
    five.classList.toggle("opened");
  }
  
  infoPerch.addEventListener("click", toggleFive);
  
  function toggleSix() {
    six.classList.toggle("opened");
  }
  
  infoBed.addEventListener("click", toggleSix);
  
  function toggleSeven() {
    seven.classList.toggle("opened");
  }
  
  infoSaddle.addEventListener("click", toggleSeven);
  
  function toggleEight() {
    eight.classList.toggle("opened");
  }
  
  infoPlush.addEventListener("click", toggleEight);
  
  function addToCartOne() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 50;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartBookOne.addEventListener("click", addToCartOne);
  
  function addToCartTwo() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 60;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartBookTwo.addEventListener("click", addToCartTwo);
  
  function addToCartThree() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 100;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartWolfChow.addEventListener("click", addToCartThree);
  
  function addToCartFour() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 500;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartTreats.addEventListener("click", addToCartFour);
  
  function addToCartFive() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 250;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartPerch.addEventListener("click", addToCartFive);
  
  function addToCartSix() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 2500;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartBed.addEventListener("click", addToCartSix);
  
  function addToCartSeven() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 750;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartSaddle.addEventListener("click", addToCartSeven);
  
  function addToCartEight() {
    cart = cart + 1;
    
    if(cart === 1) {
      cartText.textContent = "1 Item";
    } else {
      cartText.textContent = cart + " Items";
    }
    
    total = total + 45;
    
      if(total === 0) {
      priceText.textContent = "$ 0";
    } else {
      priceText.textContent = "$ " + total;
    }
  }
  
  cartPlush.addEventListener("click", addToCartEight);
  
  function clearCart () {
    cart = 0;
    total = 0;
    cartText.textContent = "0 Items";
    priceText.textContent = "$ 0";
  }
  
  clear.addEventListener("click", clearCart);
  
  function checkOut() {
    
        if(cart === 0) {
      check.textContent = "NUH-UH";
    } else {
      check.textContent = "Have a Kirby (>^^)> ";
    }
    
  }
  
  check.addEventListener("click", checkOut);
  
  function emailSubmitHandler() {
    let confirmationMsg = document.createElement("p");
    confirmationMsg.textContent = "The squawks, roars, and howls of many creatures thank you!       " + emailInput.value
    signUpForm.remove();
    footer.appendChild(confirmationMsg);
  }
  
  signUpBtn.addEventListener("click", emailSubmitHandler);