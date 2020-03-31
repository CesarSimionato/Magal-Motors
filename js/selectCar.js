const allCards = document.querySelectorAll('.card');
const after = document.querySelector('.after');
const pre = document.querySelector('#pre');

allCards.forEach(card => {
  card.addEventListener('click', function() {

    pre.classList.add('before');

    const name = this.getAttribute('id');

    let carSelected;

    cars.forEach(car => {
      if (car.name === name) {
        carSelected = car;
      }
    });
    let img = carSelected.colors[0];

    after.innerHTML = `
      <div class="after">
        <div class="carImg">
        <img id="imgCar" src="img/cars/ford/${carSelected.name}/${img.name}.webp" alt="">
        </div>
        <div class="colors">
  
        </div>
        <div class="carInfo">
          <div class="line">
            <div class="name">
              ${carSelected.name} &nbsp; ${carSelected.year} &nbsp; - &nbsp; ${carSelected.company}
            </div>
            <div class="price">
              R$${carSelected.price}
            </div>
          </div>
          <div class="line">
            <div class="motor">
              Motor: &nbsp; ${carSelected.motor}
            </div>
            <div class="maximumSpeed">
              Velocidade Maxima: &nbsp; ${carSelected.maximumSpeed}Km/h
            </div>
          </div>
        </div>
      </div>
    `;

    const colors = document.querySelector('.colors');

    carSelected.colors.forEach(color => {
      colors.innerHTML += `
        <div id="${color.name}" style="background: ${color.hex}" class="color"></div>
      `;
    });

    const color = document.querySelectorAll('.color');

    color.forEach(color => {
      color.addEventListener('click', function() {
        const name = this.getAttribute('id');
        let img = document.querySelector('#imgCar');
        img.src = `img/cars/ford/${carSelected.name}/${name}.webp`;
      })
    });

  })
});