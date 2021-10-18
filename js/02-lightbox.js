import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryUl = document.querySelector('ul.gallery');

const createGalleryHTML = () => {
    return galleryItems.map(galleryItemsToHTML).join('');
}

const galleryItemsToHTML = (item) =>
    {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </li>`;
    };
   
    galleryUl.insertAdjacentHTML('beforeend',createGalleryHTML());

let gallery = new SimpleLightbox('.gallery a',{captionDelay:250,captionsData:'alt'});




