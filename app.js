// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. $[i] is changed.`);
// };
// -------------------------------------------------------------------------

// Query Selector

// console.dir(document.querySelector("h1"));
// -----------------------------------------------------
// // select using id
// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));
// -----------------------------------------------------
// Nesting in Query Selector

// console.dir(document.querySelector("div a"));
// -----------------------------------------------------
// Selecting all element

// console.dir(document.querySelectorAll("div a"));
// ------------------------------------------------------

// Manipulating Style

// let links = document.querySelectorAll(".box a");
// for(let i = 0; i<links.length; i++){
//     links[i].style.color = "red";
// }

// Second method of using for of loop
// let links = document.querySelectorAll(".box a");
// for(link of links) { // inline style
//     link.style.color = "brown";
// }

// Practice Questions
// Part 1
// let para1 = document.createElement("p");
// para1.innerText = "Hey i'm red";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// -----------------------------------------------------
// Part 2
// let h3 = document.createElement("h3");
// h3.innerText = "Hey i'm blue h3";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");
// ----------------------------------------------------
// Part 3

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("para2");

// h1.innerText = "Im in a div";
// para2.innerText = "Me Too";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");

// document.querySelector("body").prepend(div);
// ---------------------------------------------------
// Practice Question 1

// let input = document.createElement("input");
// let button = document.createElement("button");

// button.innerText = "click me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// ------------------------------------------------------
// Practice Question 2

// Above Question Part
// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");
// ------------------------------------------------------
// Practice Question 3

// Above Question Part
// let btn = document.querySelector("#btn");
// btn.classList.add("btnStyle");
// ------------------------------------------------------
// Practice Question 4

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u> DOM Practice</u>";

// document.querySelector("body").append(h1);
// -------------------------------------------------------
// Practice Question 5

// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);
// -------------------------------------------------------






































