import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('div.gallery');
let modal;

const createGalleryHTML = () => {
    return galleryItems.map(galleryItemsToHTML).join('');
}

const galleryItemsToHTML = (item) =>
    {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </div>`;
    };

const creatImages = (event)=>{
    event.preventDefault();
    if(event.target.nodeName === "IMG"){
        modal = basicLightbox.create(`
            <img width="1400" height="900" src="${event.path[0].dataset.source}" alt="${event.path[0].alt}">
        `);
        modal.show();
    }    
}
const keyDounEsc = event => {
    if(event.key==="Escape" && basicLightbox.visible()){
        modal.close();
    };
  }

gallery.insertAdjacentHTML('beforeend',createGalleryHTML());
gallery.addEventListener('click',creatImages);
document.addEventListener("keydown", keyDounEsc);
