const aside = document.querySelector('aside');

function start() {
  cars.forEach(car => {

    let img = car.colors[0];

    aside.innerHTML += `<div id="${car.name}" class="card">
                            <div class="thumb">
                              <img src="img/cars/ford/${car.name}/${img.name}.webp" alt="">
                            </div>
                            <div class="info">
                              <div class="name">
                                <h2>${car.name}</h2>
                              </div>
                              <div class="logo">
                                ${car.company}
                              </div>
                            </div>
                          </div>`;

  })
};