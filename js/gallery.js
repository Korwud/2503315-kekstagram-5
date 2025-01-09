import { renderPictures, deletePictures } from './images.js';
import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');
const filters = document.querySelector('.img-filters');

export const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === Number(thumbnail.dataset.id)
    );
    showBigPicture(picture);
  });
  deletePictures();
  renderPictures(pictures);
  filters.classList.remove('img-filters--inactive');
};
