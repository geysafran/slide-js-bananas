let itens = [

{
    img: 'banana2.png',
    title: 'Bananinha',
    text: 'A banana é rica em',


},
 {
    img: 'banana3.png',
    title: 'Outra Banana',
    text: ' carboidratos, sais minerais e vitaminas',


},
 {
    img: 'banana.png',
    title:  'Banana',
    text: ' e possui poucos lipídios',


},
{
    img: 'banana4.png',
    title: 'Bananada',
    text: 'Sua composição faz com que seja um alimento muito saudável',


} 
]

console.log(itens[0])

let counter = 0;

let corpo = document.querySelector('body');

let img = document.createElement('img');
img.setAttribute('src', itens[2].img);

let title = document.createElement('h1');
let exTitle = document.createTextNode(itens[counter].title);
title.appendChild(exTitle);

let text = document.createElement('h3');
let exText = document.createTextNode(itens[2].text);
text.appendChild(exText);


let before = document.createElement('h2');
let beforeText = document.createTextNode('<');
before.appendChild(beforeText);

let next = document.createElement('h4');
let nextText = document.createTextNode('>');
next.appendChild(nextText);


function init(){
        corpo.appendChild(title);
        corpo.appendChild(before);
        corpo.appendChild(img);
        corpo.appendChild(next);
        corpo.appendChild(text);
        corpo.appendChild(video);
}

before.addEventListener('click', function() {
    if (counter > 0 ){
        counter = counter - 1;
        img.setAttribute('src', itens[counter].img);
        text.innerHTML = itens[counter].text;
        title.innerHTML = itens[counter].title;
    } else {counter = 2
    img.setAttribute('src', itens[counter].img);
    text.innerHTML = itens[counter].text;
    title.innerHTML = itens[counter].title;
    }


})


next.addEventListener('click', function() {
    if (counter < 3 ){
        counter = counter + 1;
        img.setAttribute('src', itens[counter].img);
        text.innerHTML = itens[counter].text;
        title.innerHTML = itens[counter].title; 
    }  else {counter = 0
    img.setAttribute('src', itens[counter].img);
    text.innerHTML = itens[counter].text;
    title.innerHTML = itens[counter].title;
    }
   
})

init ()
