var gallery = document.querySelector('main');

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg',
  'https://images.news18.com/ibnlive/uploads/2021/12/spiderman-meme-164016516016x9.png',
  'https://www.fortressofsolitude.co.za/wp-content/uploads/2021/10/Best-Spider-Man-Memes.png',
  'https://www.askideas.com/media/17/Your-A-Funny-Guy-I-LIke-That-Funny-Meme.jpg',
  'https://www.kindpng.com/picc/m/106-1065472_harold-thumbs-up-png-download-thumbs-up-meme.png',
  'https://memegenerator.net/img/instances/75679973.jpg'
];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
