// import furnitures module

import { furnitures } from "./furnitures.mjs"; 

let output = '';

const gallery = document.querySelector('.gallery');

furnitures.forEach(function(furnitures) {
  
output +=
    `<figure>
      <img src="${furnitures.pathURL}" alt="pexels:${furnitures.title}" width='${furnitures.width}px' height='${furnitures.height}px'>
      <figcaption>
        <h1>${furnitures.title}</h1>
        <h2>${furnitures.description}</h2>
        <a href="${furnitures.creditURL}" target="_blank">Design by ${furnitures.credit}</a>
        <a href="${furnitures.linkURL}" target="_blank">More Info</a>
      </figcaption>
    </figure>`;
});

gallery.innerHTML = output;