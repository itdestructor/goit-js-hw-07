import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const myGallery = document.querySelector('.gallery')
console.log(galleryItems);


const buildGallery = ({preview,original,description} = {}) =>{
    return  `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}



const galleryList = galleryItems.map(el => buildGallery(el));
myGallery.innerHTML = galleryList.join('')


const modalWindow = new SimpleLightbox('.gallery a', {

    captionsData : 'alt',
    captionDelay : 250,
    captionClass : 'centring-title'

})
console.dir(modalWindow)
