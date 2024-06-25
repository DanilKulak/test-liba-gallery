import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
  const galleryItemHTML = `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}">
      </a>
    </li>
  `;
  gallery.insertAdjacentHTML('beforeend', galleryItemHTML);
});

new SimpleLightbox('.gallery a ', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});