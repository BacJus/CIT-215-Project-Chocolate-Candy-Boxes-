let chocs = [ //Chocolate objects
  {
    chocName: "Plain Milk",
    description: "Smooth milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_milk.jpg",
  },
  {
    chocName: "Plain Dark",
    description: "Dark chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_dark.jpg",
  },
  {
    chocName: "Bailey's Cup",
    description: "Dark chocolate with Bailey's Cream Filling",
    calories: 100,
    ingredients: "Cocoa butter, Milk, Cream, baileys",
    img: "assets/baileys_cup.jpg",
  },
  {
    chocName: "Cappuccino Cup",
    description: "Dark chocolatewith Cappuccino style cream filling",
    calories: 120,
    ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
    img: "assets/cappuccino_cup.jpg",
  },
  {
    chocName: "Nutter Butter",
    description: "Dark chocolate with peanut butter",
    calories: 190,
    ingredients: "Cocoa butter, Milk, Cream, peanut butter",
    img: "assets/nutter_butter.jpg",
  },
  {
    chocName: "Orange Fondant",
    description: "Dark chocolate folded with orange fondant",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
    img: "assets/orange_fondant.jpg",
  },
  {
    chocName: "Pistachio Cup",
    description: "Dark chocolate with nuggets of pistachio",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
    img: "assets/pistachio_diamond.jpg",
  },
  {
    chocName: "Rum Barrel",
    description: "Dark chocolate with a decadent rum filling",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
    img: "assets/rum_barrel.jpg",
  },
  {
    chocName: "Toffee Crunch",
    description: "Dark chocolate with brittle toffee candy",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, toffee",
    img: "assets/toffee_crunch.jpg",
  },
  {
    chocName: "Plain Supreme",
    description: "Dark chocolate with slivers of milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_hybrid.jpg",
  },
];

$(document).ready(function() { //Automatically show the chocolates
  display(); //Line 87
});

$("#randomSample").click(function() { //Click for a random chocolate
  randomSample(); //Line 108
});

$("#show").click(function() { //Toggle calories and content
  $(".info").toggle(); //jQuery toggle switches display from hidden to visible when clicked
});


function display() {
  const area = document.querySelector("#candies"); //Selects candies to fill
  area.innerHTML = ""; //Clears each time

  for (let i = 0; i < chocs.length; i++) {
    let choco = chocs[i]; //choco variable is index in chocs
    area.innerHTML += `
    <div class = "card" id = "card${i}">
      <img src = "${choco.img}">
      <h4>${choco.chocName}</h4>
      <div class = "info" style = "display:none;">
        ${choco.description} <br>
        Calories: ${choco.calories} <br>
        Ingredients: ${choco.ingredients}
      </div>
    </div>
    `;
  }
}
//Above means: Add HTML code to inside candies div. Also display none because it's hidden until Show calories and content button clicked

function randomSample() {
  $(".card").css("background-color", "#FFFDD0"); //Set background color to cream
  let randomNum = Math.floor(Math.random() * chocs.length); //Random chocolate

  $(`#card${randomNum}`).css("background-color", "yellow"); //Change background color to yellow
  
  let randomCode = Math.floor(Math.random()*50) +1; //Random code

  alert(`You get a free sample of ${chocs[randomNum].chocName}!\n Your code is: ${randomCode}`);
}