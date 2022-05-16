var distanceForm = document.querySelector('.form');
var distanceInput = distanceForm.querySelector('.form__input');
var distanceFoot = distanceForm.querySelector('.form__foot');
var distanceBicycle = distanceForm.querySelector('.form__bicycle');
var distanceCar = distanceForm.querySelector('.form__car');
var distancePlan = distanceForm.querySelector('.form__plan');
var distanceFootMinutes = distanceForm.querySelector('.form__foot__minutes');
var distanceBicycleMinutes = distanceForm.querySelector('.form__bicycle__minutes');
var distanceCarMinutes = distanceForm.querySelector('.form__car__minutes');
var distancePlanMinutes = distanceForm.querySelector('.form__plan__minutes');

    var onFoot = 3.6;
    var bicycle = 20.1;
    var car = 70;
    var plan = 800;
    
    distanceForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        distanceInput.value.trim();
        var distance = distanceInput.value;
        
        var footHour = Math.floor(distance / onFoot);
        var bicycleHour = Math.floor(distance / bicycle);
        var carHour = Math.floor(distance / car);
        var planHour = Math.floor(distance / plan);

        distanceFoot.textContent = footHour + ' soat ';
        distanceBicycle.textContent = bicycleHour + ' soat ';
        distanceCar.textContent = carHour + ' soat ';
        distancePlan.textContent = planHour + ' soat ';

        var footMinute = Math.floor((distance / onFoot - footHour) * 60);
        var bicycleMinute = Math.floor((distance / bicycle - bicycleHour) * 60);
        var carMinute = Math.floor((distance / car - carHour) * 60);
        var planMinute = Math.floor((distance / plan - planHour) * 60);

        distanceFootMinutes.textContent = footMinute + ' daqiqa ';
        distanceBicycleMinutes.textContent = bicycleMinute + ' daqiqa ';
        distanceCarMinutes.textContent = carMinute + ' daqiqa ';
        distancePlanMinutes.textContent = planMinute + ' daqiqa ';

    // distanceFoot.textContent = `${Math.floor(onFoot / (onFoot))} soat`; 
    // distanceBicycle.textContent = `${(distance / (bicycle))} soat`; 
    // distanceCar.textContent = `${(distance / (carHour))} soat`; 
    // distancePlan.textContent = `${(distance / (planHour))} soat`;
    
    

    distanceFoot.style.color = 'rgb(138 137 139)';
    distanceBicycle.style.color = 'rgb(138 137 139)';
    distanceCar.style.color = 'rgb(138 137 139)';
    distancePlan.style.color = 'rgb(138 137 139)';
    distanceFootMinutes.style.color = 'rgb(138 137 139)';
    distanceBicycleMinutes.style.color = 'rgb(138 137 139)';
    distanceCarMinutes.style.color = 'rgb(138 137 139)';
    distancePlanMinutes.style.color = 'rgb(138 137 139)';
})