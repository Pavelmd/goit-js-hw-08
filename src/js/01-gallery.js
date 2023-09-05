import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItemsMarkup(galleryPhotos) {
  return galleryPhotos
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__link">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li> `
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,

  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
});
console.log(galleryItems);


