let activePhoto = document.querySelector('.active-photo');
let galleryPhotos = document.querySelectorAll('.preview-list > li > a');

for (let galleryPhoto of galleryPhotos) {
  galleryPhoto.onclick = function(evt) {
    evt.preventDefault();
    let currentActive = document.querySelector('.preview-list > li > a.active-item');
    activePhoto.src = galleryPhoto.href;
    currentActive.classList.remove('active-item');
    galleryPhoto.classList.add('active-item');
  };
}