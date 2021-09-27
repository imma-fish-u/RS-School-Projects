const numOfImg = 15;
let arrImg = [];
let galleryContainerInner = document.querySelector('.gallery__container-inner');
  
function shuffle(arrImg) {
  arrImg = Array(numOfImg).fill(0).map((el, item) => ++item).sort(() => Math.random() - 0.5);

  arrImg.forEach(el => {
    let li = document.createElement('li');
    li.classList.add('gallery__item');
    let img = document.createElement('img');
    img.classList.add('gallery__img');
    img.src = `assets/img/galery/galery`+ el +`.jpg`;
    img.alt = `galery` + el; 
    li.append(img);
    galleryContainerInner.append(li);
  });
}

shuffle(arrImg);

