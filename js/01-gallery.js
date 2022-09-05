import { galleryItems } from './gallery-items.js';
// Change code below this line
const myGallery = document.querySelector('.gallery')
console.log(galleryItems);

let modalWindow = null

function buildModal(alt,source){
return basicLightbox.create(
    `
    <div class="modal">
    <img
    src="${source}"
    alt="${alt}"
/>
    </div>
    `
)
}

const buildGallery = ({preview,original,description} = {}) =>{
    return  `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
             class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`
}



const galleryList = galleryItems.map(el => buildGallery(el));
myGallery.innerHTML = galleryList.join('')

const openModal = (event) => {
    event.preventDefault()
    if(event.target.nodeName !== "IMG"){
        return 
    }
    const {alt, dataset : {source}} = event.target

    modalWindow = buildModal(alt,source)
    modalWindow.show()

    window.addEventListener('keydown',closeModal)

    }

myGallery.addEventListener('click',openModal)

function closeModal(event){
    if(event.code === 'Escape'){
        modalWindow.close()
        window.removeEventListener('keydown', closeModal)
    }
} 


