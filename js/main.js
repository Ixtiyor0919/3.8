var distanceForm = document.querySelector('.form');
var distanceInput = distanceForm.querySelector('.form__input');
var distanceFoot = distanceForm.querySelector('.form__foot');
var distanceBicycle = distanceForm.querySelector('.form__bicycle');
var distanceCar = distanceForm.querySelector('.form__car');
var distancePlane = distanceForm.querySelector('.form__plan');

    var onFoot = 3.6;
    var bicycle = 20.1;
    var car = 70;
    var plane = 800;
    
    function calculateTime(distance, speed) {
        const hour = Math.floor(distance / speed);
        const minute = Math.floor((distance / speed -hour) *60)
        const second = Math.round(((distance / speed -hour) * 60 -minute) *60)
        return hour + ' soat ' + minute + 'minut' + second + 'sekund'
    }
    
    distanceForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        distanceInput.value.trim();

        distanceFoot.textContent = calculateTime(distanceInput.value, onFoot);
        distanceBicycle.textContent = calculateTime(distanceInput.value, bicycle);
        distanceCar.textContent = calculateTime(distanceInput.value, car);
        distancePlane.textContent = calculateTime(distanceInput.value, plane);

        if (distanceInput.value <= 0 || isNaN(distanceInput.value)) {
            distanceInput.classList.add("form__input--invalid")
            distanceInput.classList.remove("form__input--valid")
            return
        }else {
            distanceInput.classList.add("form__input--valid")
             distanceInput.classList.remove("form__input--invalid")
            return
        };

    });