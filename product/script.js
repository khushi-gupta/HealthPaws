var button_dog=document.querySelector("#btn-dog");
var button_cats=document.querySelector("#btn-cats");
var button_bird=document.querySelector("#btn-bird");

var dog = document.querySelector(".dog");
var bird = document.querySelector(".bird");
var cats = document.querySelector(".cats");
var start = document.querySelector(".start");

button_dog.addEventListener('click',fn);
button_cats.addEventListener('click',fn_cat);
button_bird.addEventListener('click',fn_bird);

function fn()
{

  start.classList.add("hide");
    dog.classList.add("show");
}
function fn_cat()
{
  start.classList.add("hide");
    cats.classList.add("show");

    dog.classList.remove("show");

}
function fn_bird()
{
    bird.classList.add("show");
    start.classList.add("hide");
}
